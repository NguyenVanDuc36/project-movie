import React from 'react'

export default function FilmEffect(props) {

  const phim = props.phim;

  return (
    <div className="mb-5 relative" style={{ display: 'flex', justifyContent: 'center' }} >
      <div className="card">
        <div className="image">
          <img className="object-cover w-full h-full" src={phim.hinhAnh}  />
        </div>
        <div className="details">
          <div className="center">
            <h1 className="font-semibold" style={{ fontSize: '15px' }} >{phim.tenPhim}<br /><span>team leader</span></h1>
            <p>.</p>
            <div style={{ bottom: '-40px', left: '8px' }} className="overlay2 absolute   flex justify-around  text-light text-center text-2xl text-dark">
              <i class="fas fa-play i-icon mr-4 "></i>
              <i class="fas fa-plus  i-icon mr-4"></i>
              <i class="fas fa-heart  i-icon mr-4"></i>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
