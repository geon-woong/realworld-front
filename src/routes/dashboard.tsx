import { useState,useEffect,useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getArticleTags } from "../api/article";
import { feedToggle, isLoggedInAtom } from "../atom";
import { SideBar } from "../components/SideBar";
import { Feed } from "../components/Feed";
export const DashBoard = ()=>{
/**
 * 로그인 상태
 */
const isLoggedIn = useRecoilValue(isLoggedInAtom);
/**
 * 토글상태
 */
 const toggle = useRecoilValue(feedToggle);
 /**
  * 태그 목록
  */
 const [tagList, setTagList] = useState<string[]>([])
 /**
  * 태그명
  */
 const [tagNm,setTagNm] = useState('')
 /**
  * 피드 쿼리 리스트
  */
 const queryList = useMemo(
     () => ['/feed?','?',`?tag=${tagNm}&`],
     [tagNm]
     )
/**
 * 태그 목록 불러오기
 */
 const getTags = async()=>{
    const { tags } = await getArticleTags();
    setTagList(tags);
}

useEffect(() => {
    // getTags();
}, [])

    return(
        <div>
           <Feed query={queryList[toggle]} url='/' limit={10} />
        </div>
    )
}