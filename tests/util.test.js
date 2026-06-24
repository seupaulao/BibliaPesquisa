import { describe, it, expect } from 'vitest';

// Simula as funções de util.js

function zeros(num, valor) {
  const v = valor + '';
  let s = '';
  for (let i = v.length; i < num; i++) {
    s += '0';
  }
  return s + v;
}

function contarZeros(cap, valor) {
  if (cap === 119) {
    return zeros(3, valor);
  }
  return zeros(2, valor);
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

describe('zeros()', () => {
  it('deve preencher com zeros à esquerda', () => {
    expect(zeros(3, 5)).toBe('005');
    expect(zeros(2, 42)).toBe('42');
    expect(zeros(4, 1)).toBe('0001');
  });
});

describe('contarZeros()', () => {
  it('deve usar 3 dígitos para capítulo 119', () => {
    expect(contarZeros(119, 5)).toBe('005');
  });
  it('deve usar 2 dígitos para outros capítulos', () => {
    expect(contarZeros(1, 5)).toBe('05');
    expect(contarZeros(50, 42)).toBe('42');
  });
});

describe('addDays()', () => {
  it('deve adicionar dias corretamente', () => {
    const data = new Date(2026, 5, 24);
    const resultado = addDays(data, 7);
    expect(resultado.getDate()).toBe(1);
    expect(resultado.getMonth()).toBe(6);
  });
});

describe('parseYaml()', () => {
  const { parseYaml } = (() => {
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
    return { parseYaml };
  })();

  it('deve parsear YAML simples', () => {
    const yaml = `ads:
  noBannerCooldownMinutes: 120
  banner:
    enabled: true`;
    const cfg = parseYaml(yaml);
    expect(cfg.ads.noBannerCooldownMinutes).toBe(120);
    expect(cfg.ads.banner.enabled).toBe(true);
  });

  it('deve ignorar comentários', () => {
    const yaml = `# comentário
key: value`;
    expect(parseYaml(yaml).key).toBe('value');
  });
});
