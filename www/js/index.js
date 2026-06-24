document.addEventListener('deviceready', initAds, false);

let banner = null;
let rewarded = null;
let timerBanner = null;
let adsConfig = {};

function parseYaml(yaml) {
  const result = {};
  const lines = yaml.split('\n');
  let current = result;
  const path = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const indent = line.search(/\S/);
    while (path.length > 0 && path[path.length - 1].indent >= indent) {
      path.pop();
      current = path.length > 0 ? path[path.length - 1].obj : result;
    }
    const match = trimmed.match(/^(\w[\w-]*):\s*(.*)$/);
    if (!match) continue;
    const key = match[1];
    const val = match[2].trim();
    if (val === '') {
      const newObj = {};
      current[key] = newObj;
      path.push({ indent, obj: newObj });
      current = newObj;
    } else {
      current[key] = val === 'true' ? true : val === 'false' ? false : isNaN(Number(val)) ? val : Number(val);
    }
  }
  return result;
}

async function carregarConfigAds() {
  try {
    const resp = await fetch('config.yaml');
    const text = await resp.text();
    adsConfig = parseYaml(text);
  } catch (e) {
    console.log('Erro ao carregar config.yaml, usando defaults', e);
    adsConfig = {
      ads: {
        banner: { enabled: true, adUnitId: 'ca-app-pub-3940256099942544/6300978111', position: 'bottom' },
        rewarded: { enabled: true, adUnitId: 'ca-app-pub-3940256099942544/5224354917' },
        noBannerCooldownMinutes: 120,
      },
    };
  }
}

function initAds() {
  banner = new admob.BannerAd({
    adUnitId: adsConfig.ads.banner.adUnitId,
    position: adsConfig.ads.banner.position,
  });

  rewarded = new admob.RewardedAd({
    adUnitId: adsConfig.ads.rewarded.adUnitId,
  });

  rewarded.on('load', () => {
    console.log('Vídeo carregado');
  });

  rewarded.on('reward', (reward) => {
    console.log('Usuário ganhou recompensa', reward);
    alert('Recompensa concedida!');
  });

  rewarded.on('close', () => {
    console.log('Vídeo fechado');
    iniciarTimerBanner();
  });

  if (adsConfig.ads.banner.enabled) {
    mostrarBanner();
  }
  if (adsConfig.ads.rewarded.enabled) {
    carregarVideo();
  }
}

async function mostrarBanner() {
  try {
    await banner.show();
    console.log('Banner exibido');
  } catch (e) {
    console.log('Erro ao exibir banner', e);
  }
}

async function esconderBanner() {
  try {
    await banner.hide();
    console.log('Banner escondido');
  } catch (e) {
    console.log('Erro ao esconder banner', e);
  }
}

async function carregarVideo() {
  try {
    await rewarded.load();
  } catch (e) {
    console.log('Erro ao carregar vídeo', e);
  }
}

async function mostrarVideo() {
  try {
    await esconderBanner();
    if (timerBanner) {
      clearTimeout(timerBanner);
      timerBanner = null;
    }
    await rewarded.show();
    await carregarVideo();
  } catch (e) {
    console.log('Erro ao exibir vídeo', e);
  }
}

function iniciarTimerBanner() {
  const cooldownMs = adsConfig.ads.noBannerCooldownMinutes * 60 * 1000;
  console.log('Aguardando ' + adsConfig.ads.noBannerCooldownMinutes + ' minutos para voltar o banner');
  timerBanner = setTimeout(() => {
    console.log('Tempo concluído - exibindo banner');
    mostrarBanner();
  }, cooldownMs);
}

window.onload = async function () {
  await carregarConfigAds();
  iniciar();
};
