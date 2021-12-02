import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Slider from "./components/Slider.js";
import data from "./data/data.json";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading";
import StarProducts from "./components/StarProducts";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavOptions from "./components/NavOptions";

function App() {
    return (
        <div className="App">
            <Router>
                <PreNavbar />
                <Navbar />
                <NavOptions
                    miPhones={data.miPhones}
                    redmiPhones={data.redmiPhones}
                    tv={data.tv}
                    laptop={data.laptop}
                    fitnessAndLifeStyle={data.fitnessAndLifeStyle}
                    home={data.home}
                    audio={data.audio}
                    accessories={data.accessories}
                />
                <Slider start={data.banner.start} />
                <Offers offer={data.offer} />
                <Heading text="STAR PROJECTS" />
                <StarProducts starProduct={data.starProduct} />
                <Heading text="HOT ACCESSORIES" />
                <HotAccessoriesMenu />
                <Switch>
                    <Route
                        exact
                        path="/music"
                        element={
                            <HotAccessories
                                music={data.hotAccessories.music}
                                musicCover={data.hotAccessoriesCover.music}
                            />
                        }
                    ></Route>
                    <Route
                        exact
                        path="/smartDevice"
                        element={
                            <HotAccessories
                                smartDevice={data.hotAccessories.smartDevice}
                                smartDeviceCover={
                                    data.hotAccessoriesCover.smartDevice
                                }
                            />
                        }
                    ></Route>
                    <Route
                        exact
                        path="/Home"
                        element={
                            <HotAccessories
                                home={data.hotAccessories.home}
                                homeCover={data.hotAccessoriesCover.home}
                            />
                        }
                    ></Route>
                    <Route
                        exact
                        path="/lifeStyle"
                        element={
                            <HotAccessories
                                lifeStyle={data.hotAccessories.lifeStyle}
                                lifeStyleCover={
                                    data.hotAccessoriesCover.lifeStyle
                                }
                            />
                        }
                    ></Route>
                    <Route
                        exact
                        path="/mobileAccessories"
                        element={
                            <HotAccessories
                                mobileAccessories={
                                    data.hotAccessories.mobileAccessories
                                }
                                mobileAccessoriesCover={
                                    data.hotAccessoriesCover.mobileAccessories
                                }
                            />
                        }
                    ></Route>
                </Switch>
                <Heading text="PRODUCT REVIEWS" />
                <ProductReviews productReviews={data.productReviews} />
                <Heading text="VIDEOS" />
                <Videos videos={data.videos} />
                <Heading text="IN THE PRESS" />
                <Banner banner={data.banner} />
                <Footer footer={data.footer} />
            </Router>
        </div>
    );
}

export default App;
