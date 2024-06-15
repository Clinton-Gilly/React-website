import React from 'react';
import featureimage from '../images/Frame 19.png'; // updated image name
function Features() {
  return (
    <div id='features'>
        <div className="features-model">
            <img src={ featureimage } alt='features' /> {/* updated alt attribute */}
        </div>
        <div className="features-text">
            <h2>Features</h2>
            <h3>This Application <span>Software</span>is ART</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Repellendus, doloribus tempore illum repellat in ab aperiam distinctio eveniet! 
                 Sint vel natus quo eos corrupti provident non dignissimos, quis quos optio.
                  Harum, omnis. Cupiditate adipisci non rem laudantium molestiae exercitationem saepe.</p>
            <button>View More Features</button>
        </div>
    </div>
  )
}

export default Features;