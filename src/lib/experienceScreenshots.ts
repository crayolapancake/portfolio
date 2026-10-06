interface Screenshot {
  file: string;
  alt: string;
  width: number;
  height: number;
}

// Keyed by experience id; files live in /public/<id>/
const experienceScreenshots: Record<string, Screenshot[]> = {
  keyholding: [
    { file: 'tkc-1', alt: 'dashboard', width: 744, height: 1610 },
    { file: 'tkc-2', alt: 'briefing', width: 744, height: 1610 },
    { file: 'tkc-3', alt: 'assessment', width: 744, height: 1610 },
  ],
  fixzy: [
    { file: 'fixzy-1-phone', alt: 'repairArea', width: 744, height: 1487 },
    { file: 'fixzy-2-phone', alt: 'roomScan', width: 744, height: 1487 },
    { file: 'fixzy-3-phone', alt: 'estimate', width: 744, height: 1487 },
  ],
  voxsio: [
    { file: 'allichat-3', alt: 'home', width: 766, height: 1528 },
    { file: 'allichat-2', alt: 'programmes', width: 766, height: 1528 },
    { file: 'allichat-4', alt: 'activities', width: 766, height: 1528 },
  ],
  spotlight: [
    { file: 'pickswise-1', alt: 'picks', width: 744, height: 1527 },
    { file: 'pickswise-2', alt: 'odds', width: 744, height: 1527 },
    { file: 'pickswise-3', alt: 'parlays', width: 744, height: 1527 },
  ],
  token: [
    { file: 'token-4', alt: 'wallet', width: 684, height: 1413 },
    { file: 'token-3', alt: 'tokenPage', width: 680, height: 1401 },
    { file: 'token-2', alt: 'video', width: 671, height: 1381 },
  ],
};

export default experienceScreenshots;
