import React from "react";
import styles from "./Carousel.module.css";
import { Button } from "@chakra-ui/react";

export const HomepageCard = () => {
  return (
    <>
      <div style={{marginBottom:"30px"}}>
        <div className={styles.maindiv}>
          <div className={styles.carddiv}>
            <div
              className={styles.div1}
              style={{ backgroundColor: "#A9D4003B" }}
            >
              <h2 className={styles.header1}>Free</h2>
              <p
                className={styles.header1}
                style={{ fontSize: "12px", color: "gray" }}
              >
                Start working online and sell more with CRM
              </p>
            </div>
            <div
              className={styles.div2}
              style={{ backgroundColor: "#CFF73233" }}
            >
              <h2 className={styles.header1}>Unlimited users</h2>
              <h2
                className={styles.header1}
                style={{ marginTop: "10px", color: "green" }}
              >
                100% Free
              </h2>
              <Button
                size="lg"
                ml="180px"
                mt="20px"
                w="150px"
                h="30px"
                colorScheme="whatsapp"
                mb="20px"
              >
                Register Free
              </Button>
              <h2 className={styles.header1} style={{ color: "gray" }}>
                5GB
              </h2>
              <br />
              <hr />
              <div>
                <h2 className={styles.collab}>Collaboration</h2>
                <div
                  style={{
                    marginLeft: "25px",
                    fontWeight: "500",
                    color: "grey",
                    fontSize: "14px",
                    marginTop: "15px",
                    lineHeight: "23px",
                  }}
                  className={styles.fonting}
                >
                  <p>Chat</p>
                  <p>HD Videocalls</p>
                  <p>Calendar</p>
                  <p>Company Workspace</p>
                  <p>Feed</p>
                  <p>Knowledge base</p>
                </div>
                <div style={{ lineHeight: "26px" }} className={styles.fonting}>
                  <h2 className={styles.collab}>Tasks & projects</h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    CRM
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Drive
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Contact Center
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Website builder
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.carddiv}>
            <div
              className={styles.div1}
              style={{ backgroundColor: "#21BDEE26" }}
            >
              <h2 className={styles.header1}>Basic</h2>
              <p
                className={styles.header1}
                style={{ fontSize: "12px", color: "gray" }}
              >
                Effective collaboration for small businesses and sales teams
              </p>
            </div>
            <div
              className={styles.div2}
              style={{ backgroundColor: "#CAF2FF73" }}
            >
              <h2 className={styles.header1}>5 users</h2>
              <h2
                className={styles.header1}
                style={{ marginTop: "10px", color: "blue" }}
              >
                Rs.3,052/mo
              </h2>
              <Button
                size="lg"
                ml="180px"
                mt="20px"
                w="150px"
                h="30px"
                colorScheme="twitter"
                mb="20px"
              >
                Buy
              </Button>
              <h2 className={styles.header1} style={{ color: "gray" }}>
                24GB
              </h2>
              <br />
              <hr />
              <div>
                <h2 className={styles.collab}>Collaboration</h2>
                <div
                  style={{
                    marginLeft: "25px",
                    fontWeight: "500",
                    color: "grey",
                    fontSize: "14px",
                    marginTop: "15px",
                    lineHeight: "23px",
                  }}
                  className={styles.fonting}
                >
                  <p>Chat</p>
                  <p>HD Videocalls</p>
                  <p>Calendar</p>
                  <p>Company Workspace</p>
                  <p>Feed</p>
                  <p>Knowledge base</p>
                </div>
                <div style={{ lineHeight: "26px" }} className={styles.fonting}>
                  <h2 className={styles.collab}>Tasks & projects</h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    CRM
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Drive
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Contact Center
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Website builder
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Online store
                  </h2>
                  <br />
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Customer support
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.maindiv}>
          <div className={styles.carddiv} style={{ height: "890px" }}>
            <div
              className={styles.div1}
              style={{ backgroundColor: "#21BDEE26" }}
            >
              <h2 className={styles.header1}>Standard</h2>
              <p
                className={styles.header1}
                style={{ fontSize: "12px", color: "gray" }}
              >
                Advanced collaboration for your entire company and workgroups
              </p>
            </div>
            <div
              className={styles.div2}
              style={{ backgroundColor: "#CAF2FF73", height: "790px" }}
            >
              <h2 className={styles.header1}>50 users</h2>
              <h2
                className={styles.header1}
                style={{ marginTop: "10px", color: "blue" }}
              >
                Rs.6,118/mo
              </h2>
              <Button
                size="lg"
                ml="180px"
                mt="20px"
                w="150px"
                h="30px"
                colorScheme="twitter"
                mb="20px"
              >
                Buy
              </Button>
              <h2 className={styles.header1} style={{ color: "gray" }}>
                100GB
              </h2>
              <br />
              <hr />
              <div>
                <h2 className={styles.collab}>Collaboration</h2>
                <div
                  style={{
                    marginLeft: "25px",
                    fontWeight: "500",
                    color: "grey",
                    fontSize: "14px",
                    marginTop: "15px",
                    lineHeight: "23px",
                  }}
                  className={styles.fonting}
                >
                  <p>Chat</p>
                  <p>HD Videocalls</p>
                  <p>Calendar</p>
                  <p>Company Workspace</p>
                  <p>Feed</p>
                  <p>Knowledge base</p>
                </div>
                <div style={{ lineHeight: "26px" }} className={styles.fonting}>
                  <h2 className={styles.collab}>Tasks & projects</h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    CRM
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Drive
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Contact Center
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Website builder
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Online store
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Marketing
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Online documents
                  </h2>
                  <br />
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Customer support
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Administration
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.carddiv} style={{ height: "890px" }}>
            <div
              className={styles.div1}
              style={{ backgroundColor: "#21BDEE26" }}
            >
              <h2 className={styles.header1}>Professional</h2>
              <p
                className={styles.header1}
                style={{ fontSize: "12px", color: "gray" }}
              >
                Maximum sales and business process automation
              </p>
            </div>
            <div
              className={styles.div2}
              style={{ backgroundColor: "#CAF2FF73", height: "790px" }}
            >
              <h2 className={styles.header1}>100 users</h2>
              <h2
                className={styles.header1}
                style={{ marginTop: "10px", color: "blue" }}
              >
                Rs.12,243/mo
              </h2>
              <Button
                size="lg"
                ml="180px"
                mt="20px"
                w="150px"
                h="30px"
                colorScheme="twitter"
                mb="20px"
              >
                Buy
              </Button>
              <h2 className={styles.header1} style={{ color: "gray" }}>
                1,024GB
              </h2>
              <br />
              <hr />
              <div>
                <h2 className={styles.collab}>Collaboration</h2>
                <div
                  style={{
                    marginLeft: "25px",
                    fontWeight: "500",
                    color: "grey",
                    fontSize: "14px",
                    marginTop: "15px",
                    lineHeight: "23px",
                  }}
                  className={styles.fonting}
                >
                  <p>Chat</p>
                  <p>HD Videocalls</p>
                  <p>Calendar</p>
                  <p>Company Workspace</p>
                  <p>Feed</p>
                  <p>Knowledge base</p>
                </div>
                <div style={{ lineHeight: "26px" }} className={styles.fonting}>
                  <h2 className={styles.collab}>Tasks & projects</h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    CRM
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Drive
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Contact Center
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Website builder
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Online store
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Marketing
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Online Documents
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Sales Intelligence
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Automation
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    HR
                  </h2>
                  <br />
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Customer support
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Administration
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "550px",
            margin: "auto",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          <div className={styles.carddiv} style={{ height: "950px" }}>
            <div
              className={styles.div1}
              style={{ backgroundColor: "#00D0D43B" }}
            >
              <h2 className={styles.header1}>Enterprise</h2>
              <p
                className={styles.header1}
                style={{ fontSize: "12px", color: "gray" }}
              >
                Digital transformation tools for large businesses and
                enterprises
              </p>
            </div>
            <div
              className={styles.div2}
              style={{ backgroundColor: "#CAF2FF73", height: "850px" }}
            >
              <h2 className={styles.header1}>250 users</h2>
              <h2
                className={styles.header1}
                style={{ marginTop: "10px", color: "blue" }}
              >
                Rs.24,493/mo
              </h2>
              <Button
                size="lg"
                ml="180px"
                mt="20px"
                w="150px"
                h="30px"
                colorScheme="twitter"
                mb="20px"
              >
                Buy
              </Button>
              <h2 className={styles.header1} style={{ color: "gray" }}>
                3 TB
              </h2>
              <br />
              <hr />
              <div>
                <h2 className={styles.collab}>Collaboration</h2>
                <div
                  style={{
                    marginLeft: "25px",
                    fontWeight: "500",
                    color: "grey",
                    fontSize: "14px",
                    marginTop: "15px",
                    lineHeight: "23px",
                  }}
                  className={styles.fonting}
                >
                  <p>Chat</p>
                  <p>HD Videocalls</p>
                  <p>Calendar</p>
                  <p>Company Workspace</p>
                  <p>Feed</p>
                  <p>Knowledge base</p>
                </div>
                <div style={{ lineHeight: "26px" }} className={styles.fonting}>
                  <h2 className={styles.collab}>Tasks & projects</h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    CRM
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Drive
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Contact Center
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Website builder
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Online store
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Marketing
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Online Documents
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Sales Intelligence
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Automation
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    HR
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Multiple branches
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Scalability
                  </h2>
                  <br />
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Customer support
                  </h2>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "15px",
                      fontWeight: "550",
                    }}
                  >
                    Administration
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
