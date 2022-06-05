
class Project extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'J',
            slide: 0,
            data: [
                {
                  id: "1",
                  img: "/assets/img/Node Voltage.png",
                  style: "height: 100%; width: 100%",
                  title: "Node-Voltage Calculator",
                  desc:
                    "An algorithm to solve AC circuits implemented in C++.",
                  tools: "C++, Eigen",
                  longdesc: ["Using number of nodes and how each node is connected.",
                  "Takes analytical derivatives of each equation in set of equations.",
                  "Iterate voltages to correct values using the Newton-Raphson method and the Jacobian of the set of equations."
                  ],
                  github: "https://github.com/nickrallison/NodeVoltageCalculator"
                },
                {
                  id: "2",
                  img: "/assets/img/Wordle.webp",
                  style: "height: 100%; width: 100%",
                  title: "Wordle Bot",
                  desc:
                    "A script to solve the internet game Wordle efficiently.",
                  tools: "C++",
                  longdesc: ["Takes a guess and compares the result to each word in the internal list.",
                  "After each guess, iterates through each remaining possible word and determines which will on average reduce the wordlist the most.",
                  ],
                  github: "https://github.com/nickrallison/WordleBotC__"
                },
                {
                  id: "3",
                  img: "/assets/img/MorseCode.png",
                  style: "height: 100%; width: 100%",
                  title: "Morse Code Recognition",
                  desc:
                    "A microcontroller built to recognize morse code.",
                  tools: "C, Embedded Programming, Circuit Construction",
                  longdesc: ["Users can input morse code via an input button.",
                  "The microcontroller will recognize characters by storing them in a binary tree and traversing it.",
                  "It will then output the character in question."
                  ],
                  github: "https://github.com/nickrallison/AVR-Project-Main"
                },
                {
                  id: "4",
                  img: "/assets/img/VectorField.png",
                  style: "height: 100%; width: 100%",
                  title: "Root Finding Algorithm",
                  desc:
                    "An algorithm created to find every root, real or imaginary, of an arbitrary degree polynomial.",
                  tools: "C++",
                  longdesc: ["Will take the coefficients of an arbitrary polynomial.",
                  "Developes a grid on points on the cartesian plane.",
                  "Iterates the points with Newtons method.",
                  "Uses a form of limit to recognize convergence and take that as one of the answers."
                  ],
                  github: "https://github.com/nickrallison/RootFinder"
                },
            ]
        }
        
    }

    handleClick = (way) => {
        way === "left"
          ? this.setState({slide: this.state.slide > 0 ? this.state.slide - 1 : data.length - 1})
          : this.setState({slide: this.state.slide < data.length - 1 ? this.state.slide + 1 : 0});
      };


    render(){
        return(
            <div className="Project" id="Project">
                <div
                    className="slider"
                    style={{ transform: `translateX(-${this.state.slide * 100}vw)` }}
                >
                    {this.state.data.map((d) => (
                        <div class="col s12 m6 l4">                       
                            <div class="card medium">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img src={d.img} class="activator" />
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator teal-text hoverline">{d.title}<i
                                        class="mdi-navigation-more-vert right"></i></span>
                                    <p>
                                        {d.desc}
                                    </p>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title teal-text"><small>Accomplishments</small><i
                                        class="mdi-navigation-close right"></i></span>
                                    <ul>
                                        {d.longdesc.map(line => (
                                            <li>{line}</li>
                                        ))}
                                    </ul>
                                    <div class="card-action">
                                        <a aria-label="Visit the GitHub repo for  project" href={d.github}
                                            target="_blank" data-position="top" data-tooltip="View Source"
                                            class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                                            class="fa fa-github"></i></a>
                                    </div>
                                </div>
                            </div> 

                        </div>
                    ))}
                </div>
                <img
                    src="assets/img/arrow.png"
                    className="arrow left"
                    alt=""
                    onClick={() => this.handleClick("left")}
                />
                <img
                    src="assets/img/arrow.png"
                    className="arrow right"
                    alt=""
                    onClick={() => this.handleClick()}
                />
            </div>
        )
    }


}