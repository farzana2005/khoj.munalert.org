import React from "react";

interface ShareButtonProps {
  name: string;
  seat: string;
  dates: string;
  story: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ name, seat, dates, story }) => {
  const handleShare = async () => {
    const shareText = `
নাম: ${name}
আসন: ${seat}
তারিখ: ${dates}

গল্প:
${story}

দয়া করে শেয়ার করুন ❤️
    `;

    if (navigator.share) {
      try {
        await navigator.share({
          title: name,
          text: shareText,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareText);
      alert("Story copied!");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
    >
      Share Story
    </button>
  );
};

export default ShareButton;
