interface IconLabelProps {
    label: string;
    href?: string;
    icon: any;
}

export default function IconLabel(props:IconLabelProps) {
    return(
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
        }}>
            <img src={props.icon} alt="Icon" style={{
                width: "auto",
                height: "auto",
            }}/>
            <h3>{ props.href ? <a href={props.href} target="_blank" rel="noreferrer">{props.label}</a> : props.label }</h3>
        </div>
    );
};