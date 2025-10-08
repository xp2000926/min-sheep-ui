import { describe, test, expect, vi, beforeEach } from 'vitest';
import { useQRCode } from '../src/composables/use-qr-code';

// Mock HTMLCanvasElement
class MockCanvasElement {
  width = 0;
  height = 0;
  getContext = vi.fn().mockReturnValue({
    clearRect: vi.fn(),
    fillStyle: '',
    beginPath: vi.fn(),
    roundRect: vi.fn(),
    fill: vi.fn(),
    drawImage: vi.fn(),
    fillRect: vi.fn() // 添加缺失的 fillRect 方法
  });
}

// Mock HTMLImageElement
class MockImageElement {
  width = 100;
  height = 100;
  src = '';
  onload: (() => void) | null = null;
}

// Mock QrCode
class MockQrCode {
  size: number;
  modules: boolean[][];

  constructor(size = 21) {
    this.size = size;
    this.modules = Array(size)
      .fill(null)
      .map(() =>
        Array(size)
          .fill(false)
          .map((_, i) => i % 2 === 0)
      );
  }

  getModule(x: number, y: number): boolean {
    return this.modules[y]?.[x] ?? false;
  }

  getModules(): boolean[][] {
    return this.modules;
  }
}

describe('use-qr-code 组合式函数测试', () => {
  let mockCanvas: MockCanvasElement;
  let mockImage: MockImageElement;
  let mockQrCode: MockQrCode;

  beforeEach(() => {
    mockCanvas = new MockCanvasElement();
    mockImage = new MockImageElement();
    mockQrCode = new MockQrCode();
    vi.clearAllMocks();
  });

  describe('drawCanvas 函数测试', () => {
    test('drawCanvas 函数是否可以正常工作', () => {
      const { drawCanvas } = useQRCode();

      expect(() => {
        drawCanvas(
          mockCanvas as unknown as HTMLCanvasElement,
          mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
          100,
          '#000000',
          '#FFFFFF',
          null
        );
      }).not.toThrow();
    });

    test('drawCanvas 函数处理空 canvas 时是否正确返回', () => {
      const { drawCanvas } = useQRCode();

      expect(() => {
        drawCanvas(
          null as unknown as HTMLCanvasElement,
          mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
          100,
          '#000000',
          '#FFFFFF',
          null
        );
      }).not.toThrow();
    });

    test('drawCanvas 函数设置正确的 canvas 尺寸', () => {
      const { drawCanvas } = useQRCode();

      drawCanvas(
        mockCanvas as unknown as HTMLCanvasElement,
        mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
        100,
        '#000000',
        '#FFFFFF',
        null
      );

      expect(mockCanvas.width).toBe(200); // 100 * UPSCALE_RATIO(2)
      expect(mockCanvas.height).toBe(200);
    });

    test('drawCanvas 函数调用正确的 canvas 方法', () => {
      const { drawCanvas } = useQRCode();
      const mockCtx = mockCanvas.getContext('2d');

      drawCanvas(
        mockCanvas as unknown as HTMLCanvasElement,
        mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
        100,
        '#000000',
        '#FFFFFF',
        null
      );

      expect(mockCtx.clearRect).toHaveBeenCalledWith(0, 0, 200, 200);
      expect(mockCtx.fillRect).toHaveBeenCalled();
    });

    test('drawCanvas 函数使用正确的颜色设置', () => {
      const { drawCanvas } = useQRCode();
      const mockCtx = mockCanvas.getContext('2d');

      drawCanvas(
        mockCanvas as unknown as HTMLCanvasElement,
        mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
        100,
        '#FF0000',
        '#00FF00',
        null
      );

      // 检查是否设置了正确的颜色
      expect(mockCtx.fillStyle).toBe('#FF0000');
    });

    test('drawCanvas 函数处理图标配置时是否正确', () => {
      const { drawCanvas } = useQRCode();
      const mockCtx = mockCanvas.getContext('2d');

      const iconConfig = {
        icon: mockImage as unknown as HTMLImageElement,
        iconBorderRadius: 4,
        iconSize: 40,
        iconBackgroundColor: '#FFFFFF'
      };

      drawCanvas(
        mockCanvas as unknown as HTMLCanvasElement,
        mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
        100,
        '#000000',
        '#FFFFFF',
        iconConfig
      );

      expect(mockCtx.beginPath).toHaveBeenCalled();
      expect(mockCtx.roundRect).toHaveBeenCalled();
      expect(mockCtx.fill).toHaveBeenCalled();
      expect(mockCtx.drawImage).toHaveBeenCalled();
    });

    test('drawCanvas 函数处理图标时使用正确的尺寸计算', () => {
      const { drawCanvas } = useQRCode();
      const mockCtx = mockCanvas.getContext('2d');

      const iconConfig = {
        icon: mockImage as unknown as HTMLImageElement,
        iconBorderRadius: 8,
        iconSize: 60,
        iconBackgroundColor: '#FFFFFF'
      };

      drawCanvas(
        mockCanvas as unknown as HTMLCanvasElement,
        mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
        100,
        '#000000',
        '#FFFFFF',
        iconConfig
      );

      // 验证 roundRect 被调用时使用了正确的参数
      expect(mockCtx.roundRect).toHaveBeenCalledWith(
        expect.any(Number), // centerX
        expect.any(Number), // centerY
        120, // finalIconSize (60 * UPSCALE_RATIO)
        120, // finalIconSize
        16 // iconBorderRadius * UPSCALE_RATIO (8 * 2)
      );
    });

    test('drawCanvas 函数处理不同宽高比的图标', () => {
      const { drawCanvas } = useQRCode();
      const mockCtx = mockCanvas.getContext('2d');

      // 创建一个宽大于高的图片
      const wideImage = new MockImageElement();
      wideImage.width = 200;
      wideImage.height = 100;

      const iconConfig = {
        icon: wideImage as unknown as HTMLImageElement,
        iconBorderRadius: 4,
        iconSize: 40,
        iconBackgroundColor: '#FFFFFF'
      };

      drawCanvas(
        mockCanvas as unknown as HTMLCanvasElement,
        mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
        100,
        '#000000',
        '#FFFFFF',
        iconConfig
      );

      expect(mockCtx.drawImage).toHaveBeenCalledWith(
        wideImage,
        expect.any(Number), // left
        expect.any(Number), // top
        expect.any(Number), // scaledWidth
        expect.any(Number) // scaledHeight
      );
    });
  });

  describe('createSvg 函数测试', () => {
    test('createSvg 函数是否可以正常工作', () => {
      const { createSvg } = useQRCode();

      const result = createSvg(
        mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
        100,
        '#000000',
        '#FFFFFF',
        null
      );

      expect(result).toHaveProperty('innerHtml');
      expect(result).toHaveProperty('numCells');
      expect(typeof result.innerHtml).toBe('string');
      expect(typeof result.numCells).toBe('number');
    });

    test('createSvg 函数生成正确的 SVG 内容', () => {
      const { createSvg } = useQRCode();

      const result = createSvg(
        mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
        100,
        '#FF0000',
        '#00FF00',
        null
      );

      expect(result.innerHtml).toContain('fill="#00FF00"'); // 背景色
      expect(result.innerHtml).toContain('fill="#FF0000"'); // 前景色
      expect(result.innerHtml).toContain('shape-rendering="crispEdges"');
    });

    test('createSvg 函数返回正确的单元格数量', () => {
      const { createSvg } = useQRCode();

      const result = createSvg(
        mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
        100,
        '#000000',
        '#FFFFFF',
        null
      );

      expect(result.numCells).toBe(mockQrCode.size);
    });

    test('createSvg 函数处理图标配置时是否正确', () => {
      const { createSvg } = useQRCode();

      const iconConfig = {
        iconSrc: 'https://example.com/icon.png',
        iconBorderRadius: 8,
        iconSize: 60,
        iconBackgroundColor: '#FFFFFF'
      };

      const result = createSvg(
        mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
        100,
        '#000000',
        '#FFFFFF',
        iconConfig
      );

      expect(result.innerHtml).toContain('icon.png');
      expect(result.innerHtml).toContain('filter id="imageBackground"');
      expect(result.innerHtml).toContain('clipPath id="roundedCorners"');
      expect(result.innerHtml).toContain('image fill="#FFFFFF"');
    });

    test('createSvg 函数处理图标时使用正确的尺寸计算', () => {
      const { createSvg } = useQRCode();

      const iconConfig = {
        iconSrc: 'https://example.com/icon.png',
        iconBorderRadius: 10,
        iconSize: 80,
        iconBackgroundColor: '#FFFFFF'
      };

      const result = createSvg(
        mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
        100,
        '#000000',
        '#FFFFFF',
        iconConfig
      );

      // 检查 SVG 中是否包含正确的尺寸信息
      expect(result.innerHtml).toContain('width="');
      expect(result.innerHtml).toContain('height="');
      expect(result.innerHtml).toContain('rx="');
      expect(result.innerHtml).toContain('ry="');
    });

    test('createSvg 函数处理默认图标尺寸', () => {
      const { createSvg } = useQRCode();

      const iconConfig = {
        iconSrc: 'https://example.com/icon.png',
        iconBorderRadius: 4,
        iconSize: 0, // 使用默认尺寸
        iconBackgroundColor: '#FFFFFF'
      };

      const result = createSvg(
        mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
        100,
        '#000000',
        '#FFFFFF',
        iconConfig
      );

      expect(result.innerHtml).toContain('icon.png');
    });
  });

  describe('组合函数边界情况测试', () => {
    test('drawCanvas 函数处理极小的二维码', () => {
      const { drawCanvas } = useQRCode();
      const tinyQrCode = new MockQrCode(1);

      expect(() => {
        drawCanvas(
          mockCanvas as unknown as HTMLCanvasElement,
          tinyQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
          10,
          '#000000',
          '#FFFFFF',
          null
        );
      }).not.toThrow();
    });

    test('drawCanvas 函数处理极大的二维码', () => {
      const { drawCanvas } = useQRCode();
      const largeQrCode = new MockQrCode(100);

      expect(() => {
        drawCanvas(
          mockCanvas as unknown as HTMLCanvasElement,
          largeQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
          1000,
          '#000000',
          '#FFFFFF',
          null
        );
      }).not.toThrow();
    });

    test('createSvg 函数处理不同尺寸的二维码', () => {
      const { createSvg } = useQRCode();

      const sizes = [1, 10, 21, 50, 100];
      sizes.forEach(size => {
        const qrCode = new MockQrCode(size);
        const result = createSvg(
          qrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
          size * 10,
          '#000000',
          '#FFFFFF',
          null
        );

        expect(result.numCells).toBe(size);
        expect(result.innerHtml).toContain(`h${size}v${size}`);
      });
    });

    test('createSvg 函数处理不规则模块模式', () => {
      const { createSvg } = useQRCode();

      const irregularQrCode = new MockQrCode(5);
      // 修改模块模式使其不规则
      irregularQrCode.modules = [
        [true, false, true, false, true],
        [false, true, false, true, false],
        [true, true, true, false, false],
        [false, false, true, true, true],
        [true, false, false, true, false]
      ];

      const result = createSvg(
        irregularQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
        50,
        '#000000',
        '#FFFFFF',
        null
      );

      expect(result).toBeTruthy();
      expect(result.innerHtml).toBeTruthy();
    });
  });

  describe('函数返回值测试', () => {
    test('useQRCode 函数返回正确的函数集合', () => {
      const result = useQRCode();

      expect(result).toHaveProperty('drawCanvas');
      expect(result).toHaveProperty('createSvg');
      expect(typeof result.drawCanvas).toBe('function');
      expect(typeof result.createSvg).toBe('function');
    });

    test('所有函数都可以独立调用', () => {
      const { drawCanvas, createSvg } = useQRCode();

      expect(() =>
        drawCanvas(
          mockCanvas as unknown as HTMLCanvasElement,
          mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
          100,
          '#000000',
          '#FFFFFF',
          null
        )
      ).not.toThrow();

      expect(() =>
        createSvg(
          mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
          100,
          '#000000',
          '#FFFFFF',
          null
        )
      ).not.toThrow();
    });
  });

  describe('SVG 路径生成功能测试', () => {
    test('createSvg 函数生成的路径包含正确的模块信息', () => {
      const { createSvg } = useQRCode();

      // 创建一个简单的 3x3 二维码
      const simpleQrCode = new MockQrCode(3);
      simpleQrCode.modules = [
        [true, false, true],
        [false, true, false],
        [true, true, false]
      ];

      const result = createSvg(
        simpleQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
        30,
        '#000000',
        '#FFFFFF',
        null
      );

      expect(result.innerHtml).toContain('<path');
      expect(result.innerHtml).toContain('d="');
      expect(result.numCells).toBe(3);
    });

    test('createSvg 函数处理空模块数组', () => {
      const { createSvg } = useQRCode();

      const emptyQrCode = new MockQrCode(0);
      emptyQrCode.modules = [];

      const result = createSvg(
        emptyQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
        0,
        '#000000',
        '#FFFFFF',
        null
      );

      expect(result.numCells).toBe(0);
      expect(result.innerHtml).toContain('h0v0');
    });
  });

  describe('图标功能集成测试', () => {
    test('drawCanvas 和 createSvg 都能正确处理相同的图标配置', () => {
      const { drawCanvas, createSvg } = useQRCode();

      const iconConfig = {
        icon: mockImage as unknown as HTMLImageElement,
        iconBorderRadius: 6,
        iconSize: 50,
        iconBackgroundColor: '#FF0000'
      };

      const svgIconConfig = {
        iconSrc: 'https://example.com/icon.png',
        iconBorderRadius: 6,
        iconSize: 50,
        iconBackgroundColor: '#FF0000'
      };

      expect(() => {
        drawCanvas(
          mockCanvas as unknown as HTMLCanvasElement,
          mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
          100,
          '#000000',
          '#FFFFFF',
          iconConfig
        );
      }).not.toThrow();

      expect(() => {
        createSvg(
          mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
          100,
          '#000000',
          '#FFFFFF',
          svgIconConfig
        );
      }).not.toThrow();
    });

    test('图标配置为 null 时正常处理', () => {
      const { drawCanvas, createSvg } = useQRCode();

      expect(() => {
        drawCanvas(
          mockCanvas as unknown as HTMLCanvasElement,
          mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
          100,
          '#000000',
          '#FFFFFF',
          null
        );
      }).not.toThrow();

      expect(() => {
        createSvg(
          mockQrCode as unknown as import('../src/utils/qrcodegen').qrcodegen.QrCode,
          100,
          '#000000',
          '#FFFFFF',
          null
        );
      }).not.toThrow();
    });
  });
});
