interface Screenshot {
  file: string;
  alt: string;
  width: number;
  height: number;
}

// Keyed by experience id; files live in /public/<id>/
const experienceScreenshots: Record<string, Screenshot[]> = {
  fixzy: [
    { file: 'fixzy-1-phone', alt: 'repairArea', width: 744, height: 1487 },
    { file: 'fixzy-2-phone', alt: 'roomScan', width: 744, height: 1487 },
    { file: 'fixzy-3-phone', alt: 'estimate', width: 744, height: 1487 },
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
