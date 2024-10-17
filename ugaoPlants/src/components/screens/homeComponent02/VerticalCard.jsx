import React, { useContext } from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import displayINRCurrency from '../../../helper/displayCurrency';
import addToCart from '../../../helper/addToCart';
import { Link } from 'react-router-dom';
import Context from '../../../context';
import "./VerticalCard.css"

const VerticalCard = ({ loading, data = [] }) => {
    const loadingList = new Array(13).fill(null);
    const { fetchUserAddToCart } = useContext(Context);

    const handleAddToCart = async (e, id) => {
        await addToCart(e, id);
        fetchUserAddToCart();
    };

    return (
        <div className='row'>
            {
                loading ? (
                    loadingList.map((_, index) => (
                        <div key={index} className="col-md-4">
                            <Card className="border-0">
                                <div className="text-center">
                                    Loading...
                                </div>
                            </Card>
                        </div>
                    ))
                ) : (
                    data.map((product, index) => (
                        <div key={index} className=" col-md-4 ">
                            <Card className="border-0">
                                <Link to={"/product/" + product?._id} className="nolink">
                                    <div className="textdecor position-relative">
                                        <div className="bestpick-box">
                                        <img
                                            src={product?.productImage[0]}
                                            alt={product?.productName}
                                            className="bextpick"
                                            // style={{max-height:"360px"}}
                                        />
                                        </div>
                                        {product?.sale && (
                                            <Badge
                                                bg="warning"
                                                text="dark"
                                                className="position-absolute rounded-0 text-uppercase p-2 sale-badge"
                                            >
                                                Sale
                                            </Badge>
                                        )}
                                    </div>
                                    <Card.Body className="p-2 m-0 shadow">
                                        <Card.Title>{product?.productName}</Card.Title>
                                        <div className=" pt-2"></div>
                                        <div className="star-rating">
                                            {Array.from({ length: 5 }, (v, i) => (
                                                <i
                                                    key={i}
                                                    className={`fas fa-star text-warning ${product?.rating > i ? "checked" : ""}`}
                                                />
                                            ))}
                                        </div>
                                        <p className="textprimary h6 py-2">
                                            <del className="text-secondary">
                                                <i className="fa-solid fa-indian-rupee-sign point12px"></i>
                                                {displayINRCurrency(product?.price)}
                                            </del>
                                            {"  "}From
                                            <i className="fa-solid fa-indian-rupee-sign point12px"></i>
                                            {displayINRCurrency(product?.sellingPrice)}
                                        </p>
                                        <Button className="w-100 btn bg-color rounded-0 text-uppercase" onClick={(e) => handleAddToCart(e, product?._id)}>
                                            Add to Cart
                                        </Button>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>
                    ))
                )
            }
        </div>
    );
};

export default VerticalCard;
