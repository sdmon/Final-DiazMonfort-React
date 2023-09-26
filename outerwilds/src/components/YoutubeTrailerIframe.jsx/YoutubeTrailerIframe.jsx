import PropTypes from "prop-types";
import './YoutubeTrailerIframe.css'

const YoutubeTrailerIframe = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        width="850"
        height="480"        
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Outer Wilds Launch Trailer"
      />
    </div>
  );

    YoutubeTrailerIframe.propTypes = {
        embedId: PropTypes.string.isRequired
  };
 
export default YoutubeTrailerIframe;