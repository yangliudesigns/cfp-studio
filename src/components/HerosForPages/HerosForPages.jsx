import "./HerosForPages.scss";

export default function HerosForPages({ HerosForPagesSrc }) {
  return (
    <div>
        <img 
        src={HerosForPagesSrc} 
        alt="This is page hero image"
        className="heros-for-pages"
        />
    </div>
  )
}
