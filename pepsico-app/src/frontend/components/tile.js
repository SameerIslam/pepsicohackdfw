export function Tile(props){
    var inputStyle;

    if (props.obj === 1){
        inputStyle = {
            opacity: 0,
        }
    }else{
        inputStyle = {
            opacity: 1,
        }
    }
    return (
        <div
      style={{
        width: "115px",
        height: "115px",
        backgroundColor: `#FFC857`,
        border: "5px solid #544A26",
        ...inputStyle
      }}
      className="item"
    >
      {props.obj}
    </div>
    );
}