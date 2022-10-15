import { IonHeader, IonModal } from '@ionic/react';
import { useEffect, useState, useRef } from 'react';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow-down-d-line.svg';

const Dropdown = (props) => {
    const dropdownRef = useRef();
    // Constantes to deal with keyboard events
    const SPACEBAR_KEY_CODE = [0,32];
    const ENTER_KEY_CODE = 13;
    const DOWN_ARROW_KEY_CODE = 40;
    const UP_ARROW_KEY_CODE = 38;
    const ESCAPE_KEY_CODE = 27;

    const [isOpened, setIsOpened] = useState(false);
    const [value, setValue] = useState(null);
    const [text, setText] = useState(props.placeHolder?props.placeHolder:"--- Veuillez sélectionner une valeur ---");
    const selectValue = (option) =>{
        setValue(option['value']);
        setText(option['text']);
        if(props.onValueChange){
            props.onValueChange(option['value']);
        }
        setIsOpened(false);
    }
    const focusNextListItem = (currentElement, direction) => {
        if (direction === DOWN_ARROW_KEY_CODE) {
            if (currentElement.nextSibling) {
                currentElement.nextSibling.focus();
            }
        } else if (direction === UP_ARROW_KEY_CODE) {
            if (currentElement.previousSibling) {
                currentElement.previousSibling.focus();
            }
        }
    }
    const toggleSelect=(e)=>{
        let openDropDown = SPACEBAR_KEY_CODE.includes(e.keyCode) || e.keyCode === ENTER_KEY_CODE;
        if (e.keyCode === ESCAPE_KEY_CODE) {
            setIsOpened(!isOpened)
        }
        if (e.type === "click" || openDropDown) {
            setIsOpened(!isOpened)
        }
        if (e.keyCode === DOWN_ARROW_KEY_CODE) {
            focusNextListItem(e.target, DOWN_ARROW_KEY_CODE);
        }
        if (e.keyCode === UP_ARROW_KEY_CODE) {
            focusNextListItem(e.target, UP_ARROW_KEY_CODE);
        }
    }
    const handleKeyDownItem= (event, option)=>{
        toggleSelect(event);
        if (event.keyCode === ENTER_KEY_CODE) {
            selectValue(option);
        }
    }
    const addBackDrop = (e) => {
        if(isOpened && !dropdownRef.current.contains(e.target)) {
            setIsOpened(false)
            window.removeEventListener('click', addBackDrop, true);
        }
    }

    useEffect(()=>{
        if(isOpened){
            window.addEventListener('click', addBackDrop, true);
        }
    }, [isOpened])
    // Get the value of the dropdown to display it when user want to modify an offer
    useEffect(()=>{
        if(props.value){
            const option = props.options.find(option => option.value === props.value);
            option?selectValue(option):setText(props.placeHolder?props.placeHolder:"--- Veuillez sélectionner une valeur ---");
            setIsOpened(false);
        }else{
            setText(props.placeHolder?props.placeHolder:"--- Veuillez sélectionner une valeur ---");
            setIsOpened(false);
        }
    }, [props.value])
    return (
        <>
            <ul id={props.id} className={'dropdown-wrapper' + (props.className? props.className:'') + (isOpened?" is-open":'') + (props.isError?" is-error":'')} ref={dropdownRef}>
                <li id={"dropdown-label-" + props.id} className="dropdown__label">{props.label}</li>
                <li role="button"
                    aria-labelledby={"dropdown-label-" + props.id} className='dropdown__value' onClick={toggleSelect}
                    tabIndex="0"
                    onKeyDown={toggleSelect}
                >
                    <div className='text'>{text}</div>

                    <Arrow title="Ouvrir la liste"/>
                </li>
                <li className="field-validation-error">{props.errorMessage}</li>
            </ul>
            <IonModal
                isOpen={isOpened}
                className="listbox__modal"
                >
                <IonHeader>

                <h1>{props.label} </h1>
                </IonHeader>
                <ul className='listbox'>
                    {props.options.map((option) => 
                        <li tabIndex="0" key={option.value} onKeyDown={ (event) =>{handleKeyDownItem(event, option)}} onClick={()=>selectValue(option)}>
                            <dl>
                                <dt>{option.text}</dt>
                                <dd>{option.description}</dd>
                            </dl>
                        </li>
                    )}
                </ul>
            </IonModal>
        </>
    );
};

export default Dropdown;