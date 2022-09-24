import { useContext, useEffect, useRef } from "react";
import { GroupedVirtuoso, GroupedVirtuosoHandle } from "react-virtuoso";
import { PlantListContext } from "../../../contexts/PlantListContext";
import Plant from "../../../models/plant";
import PlantResultCard from "../PlantResultCard/PlantResultCard";
import ScrollLettersMenu from "../ScrollLettersMenu/ScrollLettersMenu";


const groupDataByFirstLetter = (array: Plant[]): any => {
    let data = array.reduce((r: any, e: Plant) => {
        // get first letter of name of current element
        let group = e.name[0].normalize('NFD').replace(/\p{Diacritic}/gu, "").toLocaleUpperCase();
        // if there is no property in accumulator with this letter create it
        if (!r[group]) r[group] = {
            group,
            children: [e]
        }
        // if there is push current element to children array for that letter
        else r[group].children.push(e);
        // return accumulator
        return r;
    }, {})
    const groups = Object.values(data);
    const groupCounts = groups.map((x: any) => {
        return x.children.length;
    })
    return {
        groups: groups,
        groupCounts: groupCounts
    };
}

const GroupedMenu = () => {
    const {groupData, setGroupData, filteredPlantList, virtuoso} = useContext(PlantListContext);

    // Updates groups when filteredPlantList changes
    useEffect(() => {
        setGroupData(groupDataByFirstLetter(filteredPlantList))
    }, [filteredPlantList])

    // Scrolls to first index when groupData changes
    useEffect(() => {
        virtuoso['current']!.scrollToIndex({
            index: 0,
            align:'start'
        })
    }, [groupData])

    return <div className="grouped-menu">
        <GroupedVirtuoso
            className='plantlist-wrapper'
            ref={virtuoso}
            groupCounts={groupData.groupCounts}
            groupContent={index => {
              return <div className='group-header' style={{
                opacity: '0'
              }}>{groupData.groups[index]['group']}</div>
            }}
            itemContent={index =>{
              return filteredPlantList[index]?<PlantResultCard plant={filteredPlantList[index]}/>:""}
            }
        />
        <ScrollLettersMenu/>
    </div>
}

export default GroupedMenu;