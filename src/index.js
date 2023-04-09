import React from 'react';
import ReactDOM from 'react-dom/client';



class Window extends React.Component{
    
    constructor(props){
        super(props);
        this.state = { 
            og: "",
            newTxt: "",
            isTxtToMorse: true,
        };
        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }
    
    onChange(e){
        this.setState({ 
            og: e.target.value, 
            newTxt: this.state.isTxtToMorse ? 
                txtToMorse(e.target.value) : 
                morseToTxt(e.target.value),
        });
        
    }

    handleClick(){
        let tempBool = this.state.isTxtToMorse;
        this.setState({
            isTxtToMorse: !tempBool,
        });
        
    }

    
    render(){
        const btnTxt = !this.state.isTxtToMorse ? 
        "Convert Text To Morse Code" :
        "Convert Morse Code To Text";
        return(
            <div>
                <h1>Morse Code Translator</h1>
                <button 
                    onClick={this.handleClick}
                >{btnTxt}</button>
                <p> </p>
                <input
                    type="text"
                    onChange={this.onChange}
                    value = {this.state.og}
                ></input>
                <p>{this.state.newTxt}</p>
                
            </div>

        );
    }
}

function morseToTxt(str){
    if(str === ""){
        return "";
    }
    
    let tempStr = "";
    
    let subStr;
    
    //to seperate the words
    let strArr = str.split("  ");
    for(let i=0; i<strArr.length; i++){
        //separating the letters
        let subStrArr = strArr[i].split(" ");
        /**'
         * now I have some thing like 
         * substrarr[0] = .._
         * substrarr[1] = ..__
         * ...
         * for the word and I need to convert it into morse code letters 
         * and add them into the words then I am done I think
         * 
         * I jjust need to loop though the subsrtArr to make the word
         */

        for(let j=0; j<subStrArr.length; j++){
            
            switch(subStrArr[j]){   
                case "._":
                    subStr = "a"
                    break;
                case "_...":
                    subStr = "b"
                    break;
                case "_._.":
                    subStr = "c"
                    break;
                case "_..":
                        subStr = "d"
                        break;
                case ".":
                        subStr = "e"
                        break;
                case ".._.":
                        subStr = "f"
                        break;
                case "__.":
                        subStr = "g" 
                        break;
                case "....":
                        subStr = "h"
                        break;
                case "..":
                        subStr = "i"
                        break;
                case ".___":
                        subStr = "j"
                        break;
                case "_._":
                        subStr = "k"
                        break;
                case "._..":
                        subStr = "l"
                        break;
                case "__":
                        subStr = "m"
                        break;
                case "_.":
                        subStr = "n"
                        break;
                case "___":
                        subStr = "o"
                        break;
                case ".__.":
                        subStr = "p"
                        break;
                case "__._":
                        subStr = "q"
                        break;
                case "._.":
                        subStr = "r"
                        break;
                case "...":
                        subStr = "s"
                        break;
                case "_":
                        subStr = "t"
                        break;
                case ".._":
                        subStr = "u"
                        break;
                case "..._":
                        subStr = "v"
                        break;
                case ".__":
                        subStr = "w"
                        break;
                case "_.._":
                        subStr = "x"
                        break;
                case "_.__":
                        subStr = "y"
                        break;
                case "__..":
                        subStr = "z"
                        break;
                default: 
                    subStr = str[i];    
            }
            /**
             * adds a letter at a time and eventually a whole word
             * by the end of the loop 
             */
            tempStr += subStr;
            
        }
        /**
         * adding a space between the words
         */
        tempStr += " ";
    }

    return tempStr;

    
}





function txtToMorse(str){
    /**
     * converting the orignal start to lower case to have consistency and 
     * also because morse code does not distinguish between upper and 
     * lowe case
     */
    str = str.toLowerCase();
    let tempStr = "";
    
    /**
     * making a substring which will be added to the tempStr 
     * which is then returned to show
     */
    for(let i=0; i<str.length; i++){
        let subStr;
        switch(str[i]){
            case "a":
                subStr = "._ "
                break;
            case "b":
                subStr = "_... "
                break;
            case "c":
                subStr = "_._. "
                break;
            case "d":
                    subStr = "_.. "
                    break;
            case "e":
                    subStr = ". "
                    break;
            case "f":
                    subStr = ".._. "
                    break;
            case "g":
                    subStr = "__. " 
                    break;
            case "h":
                    subStr = ".... "
                    break;
            case "i":
                    subStr = ".. "
                    break;
            case "j":
                    subStr = ".___ "
                    break;
            case "k":
                    subStr = "_._ "
                    break;
            case "l":
                    subStr = "._.. "
                    break;
            case "m":
                    subStr = "__ "
                    break;
            case "n":
                    subStr = "_. "
                    break;
            case "o":
                    subStr = "___ "
                    break;
            case "p":
                    subStr = ".__. "
                    break;
            case "q":
                    subStr = "__._ "
                    break;
            case "r":
                    subStr = "._. "
                    break;
            case "s":
                    subStr = "... "
                    break;
            case "t":
                    subStr = "_ "
                    break;
            case "u":
                    subStr = ".._ "
                    break;
            case "v":
                    subStr = "..._ "
                    break;
            case "w":
                    subStr = ".__ "
                    break;
            case "x":
                    subStr = "_.._ "
                    break;
            case "y":
                    subStr = "_.__ "
                    break;
            case "z":
                    subStr = "__.. "
                    break;
            case " ":
                    subStr = "  "
            default: 
                subStr = str[i];    
        }
        tempStr += subStr;
        //console.log(str[i]);
    }
    

    return tempStr;
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Window />)