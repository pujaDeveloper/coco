import {
  StyleSheet,
  Dimensions
} from 'react-native';
import color from '../../utils/color';
import {
  screenHeight,
  screenWidth
} from "../../utils/theme"
import Globals from "./../../utils/Globals";

let homePageStyleList = {
  mView: {
    self: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'space-evenly',
      backgroundColor: color.WHITE,
      flexDirection: "column"
    },
    t1: {
      self: {
        flex: 0.2,
        fontSize: 40,
        fontWeight: "600",
        paddingLeft: 24,
        maxHeight: 100
      }
    },
    v1: {
      self: {
        flex: 0.1,
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 24,
        paddingRight: 24,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        maxHeight: 50
      },
      v1: {
        self: {
          flex: 0.82,
          position: 'relative'
        },
        image: {
          self: {
            width: 25,
            height: 25,
            tintColor: color.WHITE,
            position: "absolute",
            left: 10,
            top: "25%",
            tintColor: color.PRIMARY,
            zIndex: 1
          }
        },
        ti: {
          self: {
            padding: 5,
            paddingLeft: 50,
            // opacity: 0.5,
            backgroundColor: color.PRIMARYLIGHT,
            borderColor: color.WHITE,
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            height: '100%',
            fontWeight: '600'
          }
        }
      },
      th1: {
        self: {
          flex: 0.15,
          backgroundColor: color.PRIMARY,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          aspectRatio: 1,
          maxHeight: 50
        },
        image: {
          self: {
            width: 25,
            height: 25,
            tintColor: color.WHITE
          }
        }
      }
    },
    v2: {
      self: {flex: 0.5}
    }
  },
  carousel: {
    item: {
      self: {
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        marginLeft: 24,
        backgroundColor: 'blue'
      },
      bgImage: {
        self: {
          height: "100%",
          width: "100%",
          alignSelf: 'center'
        }
      },
      details: {
        self: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: "100%",
          height: "40%",
          minHeight: 130,
          padding: 10,
        },
        bView: {
          self: {
            height: "100%",
            width: "100%",
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "space-around",
            alignItems: "stretch"
          },
          v1: {
            self: {
              flex: 0.7,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: "space-around",
              alignItems: "flex-start"
            },
            v1: {
              self: {
                marginLeft: 12,
                paddingLeft: 4,
                paddingRight: 4,
                flex: 0.2,
                backgroundColor: color.WHITE,
                borderRadius: 10,
                maxHeight: 28
              },
              t1: {
                self: {
                  padding: 4,
                  color: color.PRIMARY,
                  fontWeight: "600"
                }
              }
            },
            v2: {
              self: {
                flex: 0.5,
                paddingLeft: 12
              },
              t1: {
                self: {
                  fontSize: 20,
                  fontWeight: "600"
                }
              },
              t2: {
                self: {
                  fontSize: 16,
                  fontWeight: "600"
                }
              },
            }
          },
          v2: {
            self: {
              flex: 0.2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: "center",
              alignItems: "center",
            },
            image: {
              self: {
                height: "70%",
                width: undefined,
                aspectRatio: 1,
                tintColor: color.DarkGrey,
                flex: 0.2,
                zIndex: 1
              }
            }
          }
        }
      }
    }
  }
}

const styles = StyleSheet.create(homePageStyleList);

export default styles;