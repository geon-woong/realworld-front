import { useState,useEffect,useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getArticleTags } from "../api/article";
import { feedTag, feedToggle, isLoggedInAtom } from "../atom";
import { TagsList } from "../components/TagsList";
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
 const tag = useRecoilValue(feedTag);
 /**
  * 피드 쿼리 리스트
  */
 const queryList = useMemo(
     () => ['/feed?','?',`?tag=${tag}&`],
     [tag]
     )
/**
 * 태그 목록 불러오기
 */
 const getTags = async()=>{
    const { tags } = await getArticleTags();
    setTagList(tags);
}

useEffect(() => {
    getTags();
}, [isLoggedIn])

    return(
        <>
            <TagsList tagList={tagList} clickable={true} />
            <Feed query={queryList[toggle]} url='/dashboard' limit={10} />
        </>
    )
}