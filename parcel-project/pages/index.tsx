import React, {useEffect, useState, useRef} from 'react';


export default function Home() {
  const [courier, setCourier] = useState<any>([]);
  const [selected, setSelected] = useState<any>(null)
  const [pk, setPk] = useState<any>(null)
  useEffect(()=>{
    // fetch(`https://apis.tracker.delivery/carriers/kr.hanjin/tracks/451531853603`)
    fetch(`/api/courier`)
    .then(res=>res.json()).then(res=>setCourier(res))
  },[])

  useEffect(()=>{
    setSelected(courier?.map(el=>el.id))
  },[courier])

  const handleSelect = (e:any) => {
    e.preventDefault();
    courier?.includes(e.target.value) && null;
  }
  return (
    <div id="wrap">
      <section>
        <div>
          <h2>국내/국외 선택</h2>
          <button>국내</button>
          <button>국외</button>
        </div>
        <div>
          <h2>택배사 선택</h2>
          <select name="" id="" onChange={e=>{handleSelect(e)}}>
            {courier.map(el=><option>{el.name}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="">운송장 번호 입력</label>
          <input type="text" placeholder="운송장 번호 - 없이 입력"/>
        </div>
        <div>
          <button>조회하기</button>
        </div>
      </section>
    </div>
  )
}
