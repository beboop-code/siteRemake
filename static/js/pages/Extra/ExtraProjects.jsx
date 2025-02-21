import './ExtraProjects.css';
import thePDF from './ExtraProjects.pdf';

function ExtraProjects() {
  return (
    <div className="extra-projects-container">
      <object
        type="application/pdf"
        data={`${thePDF}?#zoom=60&toolbar=0&scrollbar=0`}
        // data={thePDF}
        width="100%"
        height="100%"
        className="pdf"
      >
        <p>PDF failed to load</p>
      </object>
    </div>
  );
}

export default ExtraProjects;
