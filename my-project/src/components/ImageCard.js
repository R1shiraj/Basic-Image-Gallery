import React from 'react';

const imageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className=" max-w-md rounded border-2 border-slate-400 overflow-hidden shadow-xl">
      <img src={image.webformatURL} alt="" className="w-full p-2" />
      <div className=" px-6 py-4">
        <div className=" font-bold text-xl text-purple-500 mb-2">
          Photo By {image.user}
        </div>
        <ul>
          <li>
            <strong>Views : </strong>
            {image.views}
          </li>
          <li>
            <strong>Likes : </strong>
            {image.likes}
          </li>
          <li>
            <strong>Downloads : </strong>
            {image.downloads}
          </li>
        </ul>
      </div>
      <div className="px-6 pb-6 pt-2">
        {tags.map(tag => (
          <span className=" rounded-full inline-block bg-gray-400 px-3 pt-1 pb-2 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default imageCard;