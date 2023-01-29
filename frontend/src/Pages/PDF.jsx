import Card from "../Components/Card";
import pdf_blocks from "../Components/pdf_cards";
import "../Pages-Style/PDF.css"

const PDF = () => {
  return <div className="pdf_page">{pdf_blocks.map(Card)}</div>;
};

export default PDF;
