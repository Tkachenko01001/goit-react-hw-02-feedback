import { SectionFeedback } from "./Section.styled";

const Section = ({title, children}) => {
    return (
        <SectionFeedback>
            {title && <h1>{title}</h1>}
              {children}
        </SectionFeedback>
    )
}

export default Section;