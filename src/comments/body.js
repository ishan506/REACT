const Body = () => {
  return (
    <div className="body">
      <div className="search-box">
        <input placeholder="search" />
        <CiSearch className="search-icon" />
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};