document.addEventListener('deviceready', initAds, false);

let banner = null;
let rewarded = null;
let timerBanner = null;

const TEMPO_RETORNO_BANNER = 3 * 60 * 1000; // 3 minutos

function initAds() {
  // Cria banner
  banner = new admob.BannerAd({
    adUnitId: 'ca-app-pub-3940256099942544/6300978111',
    position: 'bottom',
  });

  // Cria rewarded
  rewarded = new admob.RewardedAd({
    adUnitId: 'ca-app-pub-3940256099942544/5224354917',
  });

  // Eventos do rewarded
  rewarded.on('load', () => {
    console.log('Vídeo carregado');
  });

  rewarded.on('reward', (reward) => {
    console.log('Usuário ganhou recompensa', reward);
    alert('Recompensa concedida!');
  });

  rewarded.on('close', () => {
    console.log('Vídeo fechado');

    // 🚫 NÃO mostrar banner ainda
    iniciarTimerBanner();
  });

  // Inicialização
  mostrarBanner();
  carregarVideo();
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
    // Esconde banner antes do vídeo
    await esconderBanner();

    // Cancela timer anterior (se existir)
    if (timerBanner) {
      clearTimeout(timerBanner);
      timerBanner = null;
    }

    // Mostra vídeo
    await rewarded.show();

    // Pré-carrega próximo
    await carregarVideo();

  } catch (e) {
    console.log('Erro ao exibir vídeo', e);
  }
}

function iniciarTimerBanner() {
  console.log('Aguardando 3 minutos para voltar o banner');

  timerBanner = setTimeout(() => {
    console.log('Tempo concluído - exibindo banner');
    mostrarBanner();
  }, TEMPO_RETORNO_BANNER);
}

window.onload=function()
{
  iniciar();
}


