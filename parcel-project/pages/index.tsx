import React, {useEffect, useState, useRef} from 'react';


export default function Home() {
  const [courier, setCourier] = useState<any>([]);
  const [select, setSelect] = useState<[]>([])
  const [selected, setSelected] = useState<any>(null)
  const [pk, setPk] = useState<any>(null)

  useEffect(()=>{
    fetch(`/api/courier`)
    .then(res=>res.json()).then(res=>setCourier(res))
  },[])


  const handleDomestic = () => { 
    setSelect(courier.filter(el=>{
      return (el.id.includes("kr"))
    }))
  }
  const handleAbroad = () => {
    setSelect(courier.filter(el=>{
      return !(el.id.includes("kr"))
    }))
  }

  const handleSelect = (e) => {
    console.log(e.target.value)
  }

  useEffect(()=>{
    console.log(select)
  },[select])

  return (
    <div id="wrap">
      <section>
        <div>
          <h2>국내/국외 선택</h2>
          <button type="button" set={true} onClick={handleDomestic}>국내</button>
          <button onClick={handleAbroad}>국외</button>
        </div>
        <div>
          <h2>택배사 선택</h2>
          <select name="" id="" onChange={handleSelect}>
            {(select)&&select.map(el=><option>{el.name}</option>)}
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
