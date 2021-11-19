type sectionTitleTypes = {
   pretitle: string,
   title: string
}

const SectionTitle = ({ pretitle, title }:sectionTitleTypes) => {
  return (
     <div className="sectionTitle">
        <div className="titleHolder">
           <div className="title">
              {pretitle && (
                 <div className="subTitle">{pretitle}</div>
              )}
              {title && <div className="main-title">{title}</div>}
           </div>
        </div>
     </div>
  );
};

export default SectionTitle;