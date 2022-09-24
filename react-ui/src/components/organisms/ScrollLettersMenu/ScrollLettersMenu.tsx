import { useContext, useEffect, useRef, useState } from "react";
import { PlantListContext } from "../../../contexts/PlantListContext";


const ScrollLettersMenu= () => {
    const { groupData, virtuoso } = useContext(PlantListContext);
    const [currentScrollIndex, setCurrentScrollIndex] = useState('')
    const [isDragging, setIsDragging] = useState(false)
    const [wrapperCoordinates, setWrapperCoordinates] = useState<DOMRect|null>()
    const scrollLettersRef = useRef<HTMLUListElement>(null);
    
    // Scrolls to item index
    const scrollTo = (itemIndex: number) => {
        virtuoso['current']!.scrollToIndex({
            index: itemIndex,
            align: 'center'
        })
    }

    // Updates current scroll index and scrolls to  corresponding item index
    const manageScrollMenu = (scrollIndex: string, itemIndex: number) => {
        setCurrentScrollIndex(scrollIndex)
        scrollTo(itemIndex)
    }

    // Retrieves index to scroll to based on a group name
    const findIndexToScroll = (letter: string): number => {
        const index = groupData.groups.findIndex(x => {
            return x['group'] === letter;
        });
        const _groupDataCounts = [...groupData.groupCounts];
        _groupDataCounts.splice(index)
        const indexToScroll = _groupDataCounts.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        return indexToScroll;
    }

    // Checks if user is touching the scroll letter menu
    const isTouchInMenuWrapper = (coordX: number, coordY: number) =>{
        return wrapperCoordinates?
        ( wrapperCoordinates.x < coordX 
        && coordX < (wrapperCoordinates.right) 
        && wrapperCoordinates.y < coordY
        && coordY < (wrapperCoordinates.bottom)
        && coordY > (wrapperCoordinates.top))
        :false
    }

    // Scrolls to selected items when user is touching a letter
    const onPointerDown = (e: React.PointerEvent<any>, index: number, itemIndex: number) => {
        e.preventDefault();
        setIsDragging(true)
        manageScrollMenu(groupData.groups[index]['group'], itemIndex)
    }
    
    // Scrolls to selected items when user has touched a letter and is sliding to another one
    const onPointerMove = (e: React.PointerEvent<any>, index: number, itemIndex: number) => {
        e.preventDefault();
        if(isDragging){
            if(e.pointerType !== "touch"){
                manageScrollMenu(groupData.groups[index]['group'], itemIndex)
            }
        }
    }

    // Removes letter preview when user removes his finger from the srll letter menu
    const onPointerUp = (e: React.PointerEvent<any>) => {
        e.preventDefault();
        setCurrentScrollIndex('')
        setIsDragging(false)
    }
    
    // Scrolls to selected items when user has touched a letter and is sliding to another one (on mobile)
    const onTouchMove = (e: React.TouchEvent < any > , index: number, itemIndex: number) => {
            e.preventDefault();
            if (isDragging && isTouchInMenuWrapper(e.nativeEvent.touches[0].pageX, e.nativeEvent.touches[0].pageY)) {
                // Get currenty touched HTML element
                const realTarget = document.elementFromPoint(e.nativeEvent.touches[0].pageX, e.nativeEvent.touches[0].pageY);
                const currentLetter = realTarget?.textContent || "";
                if(currentLetter.length<=1 && currentLetter.localeCompare(currentScrollIndex)!==0){
                    manageScrollMenu(currentLetter, findIndexToScroll(currentLetter));
                }
            } else {
                setCurrentScrollIndex('');
                setIsDragging(false);
            }
    }

    useEffect(()=>{
        setTimeout(()=>{
            const _scrollLettersRef = document.querySelector(".scroll-letters-wrapper");
            const coordinates = _scrollLettersRef?_scrollLettersRef.getBoundingClientRect():null;
            if(_scrollLettersRef){
                setWrapperCoordinates(coordinates);
            }
        },200)
    },[])
    
    return (
        <>
            <ul
                className='scroll-letters-wrapper'
                onPointerLeave={e=>{onPointerUp(e)}}
                ref={scrollLettersRef}
            >
                {groupData.groupCounts
                .reduce(
                    ({ firstItemsIndexes, offset }:{firstItemsIndexes:number[], offset:number}, count) => {
                    return {
                        firstItemsIndexes: [...firstItemsIndexes, offset],
                        offset: offset + count,
                    }
                    },
                    { firstItemsIndexes: [], offset: 0 }
                )
                .firstItemsIndexes.map((itemIndex, index) => (
                    <li key={index}
                        onPointerDown={e=>{onPointerDown(e,index, itemIndex)}}
                        onPointerMove={e=>{onPointerMove(e,index, itemIndex)}}
                        onPointerUp={e=>{onPointerUp(e)}}
                        onTouchMove={e=>onTouchMove(e,index, itemIndex)}
                        data-index={index}
                        data-itemindex={itemIndex}
                        >
                        <div
                            
                        >
                            {groupData.groups[index]['group']}
                        </div>
                    </li>
                ))}
                {currentScrollIndex?<li className="preview-letter"><span>{currentScrollIndex}</span></li>:''}
            </ul>            
        </>
    );
};
  
export default ScrollLettersMenu;
  