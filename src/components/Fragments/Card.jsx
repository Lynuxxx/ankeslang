const Card = (props) => {
    const { img, title, price, category } = props;
    return (
        <div className="bg-white shadow-sm border pb-4 cursor-pointer rounded-lg overflow-hidden hover:border-blue-400 hover:shadow-md">
            <img src={img} alt={title} className="w-80" />
            <div className="ms-4">
                <h2 className="text-slate-700 text-xl font-semibold my-4">
                    {title}
                </h2>
                <p className="text-slate-600 flex items-center gap-2">
                    <svg
                        class="h-5 w-5 text-slate-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                        <path d="M12 6v2m0 8v2" />
                    </svg>
                    Harga tetap :{" "}
                    <span className="text-green-600 font-semibold font-">
                        Rp {price.toLocaleString()}
                    </span>
                </p>
                <p className="text-slate-600 flex items-center gap-2">
                    <svg
                        class="h-5 w-5 text-slate-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                        <line x1="7" y1="7" x2="7.01" y2="7" />
                    </svg>
                    Category : {category}
                </p>
            </div>
        </div>
    );
};

export default Card;
