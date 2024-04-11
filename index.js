const Box = props => {
    return(
        const{className,text}=props;
        <div className="container">
            <p className={className}>{text}</p>
        </div>
    );
  //  Write your code here.
};

const element = (
    <div>
        <h1 className="heading">Boxes</h1>
        <Box className="box box1" text="Small" />>
        <Box className="box box2" text="Medium" />>
        <Box className="box box3" text="Large" />>
    </div>
  //  Write your code here. 
)

ReactDOM.render(element, document.getElementById("root"));
