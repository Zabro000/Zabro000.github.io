import "./Project.css"

class CoolButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            downloading: false
        }
    }

    handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };

    render(){

        if(this.state.downloading){
            return (
                <p className="downloading">Downloading...</p>
            )
        }

        return(
            <button onClick={()=> this.setState({downloading: true})}>
                {this.props.customText}
            </button>
        )
    }


}