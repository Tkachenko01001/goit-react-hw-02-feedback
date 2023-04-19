import { SectionFeedback } from "./Section.styled";
import PropTypes from "prop-types";

const Section = ({title, children}) => {
    return (
        <SectionFeedback>
            {title && <h1>{title}</h1>}
            {children}
        </SectionFeedback>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default Section;