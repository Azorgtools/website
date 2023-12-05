import { FunctionComponent } from "react";

interface PageHeaderProps {
    title: string;
}

const PageHeader: FunctionComponent<PageHeaderProps> = ({ title }) => {
    return (
        <div className="page-header">{ title }</div>
    );
}

export default PageHeader;
