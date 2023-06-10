interface defaults {
  optimizeAll: boolean;
  imgTagExtensions: string[];
  componentExtensions: any[];
  inlineBelow: number;
  compressionLevel: number;
  quality: number;
  tagName: string;
  sizes: number[];
  breakpoints: number[];
  outputDir: string;
  publicDir: string;
  placeholder: string;
  placeholderSize: number;
  webpOptions: {
    quality: number;
    lossless: boolean;
    force: boolean;
  };
  webp: boolean;
  trace: {
    background: string;
    color: string;
    threshold: number;
  };
  optimizeRemote: boolean;
  processFolders: any[];
  processFoldersRecursively: boolean;
  processFoldersExtensions: string[];
  processFoldersSizes: boolean;
}

declare let options: defaults;

declare function replaceImages(content: any): Promise<any>;
declare function getPreprocessor(opts?: Partial<typeof options>): {
  markup: ({ content }: { content: any }) => Promise<{
    code: any;
  }>;
};

export { defaults, replaceImages, getPreprocessor };
