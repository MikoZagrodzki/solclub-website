export default function calculateWidth(modalTitle, widowSize) {
  if (modalTitle === 'manByBar' || modalTitle === 'lapDance') {
    return (
      widowSize <= 480 ? 45 :
      widowSize <= 520 ? 65 :
      widowSize <= 560 ? 70 :
      widowSize <= 600 ? 73 :
      widowSize <= 640 ? 80 :
      widowSize <= 680 ? 83 :
      widowSize <= 720 ? 84 :
      widowSize <= 760 ? 85 :
      widowSize <= 768 ? 90 :
      widowSize <= 800 ? 95 :
      widowSize <= 840 ? 95 :
      widowSize <= 880 ? 95 :
      widowSize <= 920 ? 100 :
      widowSize <= 960 ? 110 :
      widowSize <= 1000 ? 120 :
      widowSize <= 1040 ? 130 :
      widowSize <= 1080 ? 140 : 150
    );
  } else {
    return (
      widowSize <= 480 ? 28 :
      widowSize <= 520 ? 32 :
      widowSize <= 560 ? 36 :
      widowSize <= 600 ? 40 :
      widowSize <= 640 ? 45 :
      widowSize <= 680 ? 50 :
      widowSize <= 720 ? 55 :
      widowSize <= 760 ? 60 :
      widowSize <= 768 ? 60 :
      widowSize <= 800 ? 65 :
      widowSize <= 840 ? 67 :
      widowSize <= 880 ? 70 :
      widowSize <= 920 ? 72 :
      widowSize <= 960 ? 80 :
      widowSize <= 1000 ? 90 :
      widowSize <= 1040 ? 92 :
      widowSize <= 1080 ? 94 : 95
    );
  }
}