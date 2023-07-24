

const AboutContent = ( {title, text1 , year, text2, text3, text4, year1, year2,year3, year4 }) => {
  return (
    <div className="box">
        <h3>{title}</h3>
        <div>
            <ul>
                <li>{text1}</li>
                <li>{text2}</li>
                <li>{text3} </li>
                <li>{text4}</li>
            </ul>
            <ul>
                <li>{year1}</li>
                <li>{year2}</li>
                <li>{year3}</li>
                <li>{year4}</li>
            </ul>
        </div>
    </div>

    

  )
}

export default AboutContent