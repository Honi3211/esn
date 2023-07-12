import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";

export const handleIcon = ({ icon, size = 24, className = "" }) => {
  switch (icon) {
    case "instagram":
      return (
        <InstagramIcon
          className={className}
          style={{ width: size, height: size }}
        />
      );
    case "facebook":
      return (
        <FacebookIcon
          className={className}
          style={{ width: size, height: size }}
        />
      );
    case "youtube":
      return (
        <YouTubeIcon
          className={className}
          style={{ width: size, height: size }}
        />
      );
    case "play":
      return (
        <PlayCircleOutlineRoundedIcon
          className={className}
          style={{ width: size, height: size }}
        />
      );
    default:
      return 0;
  }
};
