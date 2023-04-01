import { useState } from "react";
import { Box, ButtonBase, Collapse, NoSsr } from "@mui/material";
import parse from "html-react-parser";
import { useAppSelector } from "Redux/Hook";

interface ArticlesDesc {
    description: string;
}

const Articles = () => {
    const { articles } = useAppSelector(state => state.getArticles);
    const [articlesData, setArticlesData] = useState<ArticlesDesc>(articles);
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };
    return (
        <Box>
            <Collapse sx={{ position: "relative" }} in={expanded} collapsedSize={100}>
                <Box>
                    <Box >
                        <NoSsr>
                            {parse(articlesData?.description || "")}
                        </NoSsr>
                    </Box>
                    <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "15px", background: "linear-gradient(to top, #fff,#fff, transparent)" }} />
                </Box>
            </Collapse>
            <ButtonBase onClick={toggleExpanded} sx={{ color: "primary.main", fontSize: "14px" }}>
                {expanded ? 'Show Less' : 'Show More'}
            </ButtonBase>
        </Box>
    );
};

export default Articles;