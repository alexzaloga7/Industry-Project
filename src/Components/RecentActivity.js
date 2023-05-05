import './RecentActivity.scss';
function RecentActivity() {
    return <section className="ra">
        <div className="ra__left">
            <div className="ra__heading">
                <h2 className="ra__heading-text"><span className="ra__link">Recent Activity</span></h2>
            </div>
            <div className="ra__transaction-types">
                <div className="ra__type ra__type--chosen">
                    <p className="ra__type-text">
                        Latest Transactions
                    </p>
                </div>
                <div className="ra__type">
                    <p className="ra__type-text">
                        <span className="ra__link">Pending Transactions</span>
                    </p>
                </div>
            </div>
                <div className="ra__transaction-status">
                    <p className="ra__transaction-status-text">Latest Transactions</p>
                    <p className="ra__learn-more ra__link">Learn More</p>
                </div>
                <ul className="ra__transactions">
                    <li className="ra__transaction"></li>
                    <li className="ra__transaction"></li>
                    <li className="ra__transaction"></li>
                    <li className="ra__transaction"></li>
                </ul>
                </div>
                <div className="ra__right">
                    <div className="ra__top">
                        <section className="chatbot">
                            <div className="chatbot__header">
                                <p className="chatbot__header-text">Personal Assistant</p>
                                <span class="material-symbols-outlined chatbot__close">close</span>
                            </div>
                            <div className="chatbot__content">
                                <div className="chatbot__res">
                                    <img className="chatbot__img" src="https://www.shutterstock.com/image-vector/colorful-wolfs-head-on-black-600w-1690939516.jpg"/>
                                    <div className="chatbot__message">
                                        <p className="chatbot__timestamp">12:08 AM</p>
                                        <p className="chatbot__message-content">Chat help here</p>
                                        <div className="chatbot__res-shape"></div>
                                    </div>
                                </div>
                                <div className="chatbot__req">
                                    <div className="chatbot__message">
                                        <p className="chatbot__timestamp">12:13 AM</p>
                                        <p className="chatbot__message-content">user reply here</p>
                                        <div className="chatbot__req-shape"></div>
                                    </div>
                                    <img className="chatbot__img" src="https://www.shutterstock.com/image-vector/chihuahua-dog-abstract-neon-color-600w-1842098419.jpg"/>
                                </div>
                            </div>
                            <div className="chatbot__input">
                                <span class=" chatbot__icon material-symbols-outlined">attach_file</span>
                                <input className="chatbot__message-input" type="text"/>
                                <span class=" chatbot__icon material-symbols-outlined">mood</span>
                            </div>
                        </section>
                    </div>
                    <div className="ra__bottom">
                        <p className="ra__useful-links">Useful Links</p>
                    </div>
                </div>
        </section>
}

export default RecentActivity;