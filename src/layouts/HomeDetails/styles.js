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

let homeDetailsStyleList = {
  mView: {
    self: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'space-evenly',
      backgroundColor: color.OFFWHITE,
      flexDirection: "column"
    },
    v1: {
      self: {
        flex: 0.7,
        padding: 10,
        borderRadius: 10,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch'
      },
      image: {
        self: {
          height: "100%",
          width: "100%",
          alignSelf: 'center',
          borderRadius: 30,
          position: "absolute",
          left: 10,
          top: 10
        }
      },
      v1: {
        self: {
          flex: 0.1,
          padding: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        },
        image1: {
          self: {
            height: 40,
            width: 40,
            tintColor: color.WHITE
          }
        },
        t1: {
          self: {
            fontWeight: '600',
            fontSize: 20,
            zIndex: 1
          }
        },
        image2: {
          self: {
            height: 40,
            width: 40,
            tintColor: color.WHITE
          }
        }
      },
      v2: {
        self: {
          flex: 0.4,
          paddingBottom: 10,
          maxHeight: Dimensions.get('screen').width / 3 - 20,
          alignSelf: 'center'
        }
      }
    },
    v2: {
      self: {
        flex: 0.5,
        flexDirection: "column",
        display: "flex",
        justifyContent: 'space-between',
        paddingBottom: 16
      },
      v1: {
        self: {
          display: "flex",
          flexDirection: "row",
          flex: 0.3,
          justifyContent: "space-between",
          alignItems: 'center',
          paddingHorizontal: 20
          // flexWrap: 'wrap'
        },
        v1: {
          self: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "space-between",
            alignItems: "flex-start",
            // backgroundColor: 'blue'
          },
          v1: {
            self: {
              paddingLeft: 4,
              paddingRight: 4,
              backgroundColor: color.WHITE,
              borderRadius: 10,
              maxHeight: 28,
              marginBottom: 10
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
            self: {},
            t1: {
              self: {
                fontSize: 20,
                fontWeight: "600",
                color: color.DarkGrey
              }
            }
          }
        },
        v2: {
          t1: {
            self: {
              fontSize: 20,
              fontWeight: "600",
              color: color.DarkGrey
            }
          }
        }
      },
      v2: {
        self: {
          flex: 0.2,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: "flex-start",
          alignItems: 'center'
        },
        image: {
          self: {
            width: 25,
            height: 25,
            tintColor: color.PRIMARY,
            marginLeft: 15,
            marginRight: 5
          }
        },
        t1: {
          self: {
            color: color.DarkGrey
          }
        }
      },
      t1: {
        self: {
          display: "flex",
          flexDirection: "row",
          flex: 0.5,
          paddingHorizontal: 20,
          color: color.DarkGrey
          // flexWrap: 'wrap'
        }
      },
      to1: {
        self: {
          flex: 0.2,
          backgroundColor: color.PRIMARY,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          maxHeight: 50,
          minHeight: 30,
          marginHorizontal: 50
        },
        t1: {
          self: {
            fontWeight: '600',
            color: color.WHITE
          }
        },
        image: {
          self: {
            width: 25,
            height: 25,
            tintColor: color.WHITE,
            marginLeft: 5
          }
        }
      }
    }
  },
  carousel: {
    v1: {
      self: {
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        marginLeft: 24,
        backgroundColor: 'blue',
        borderColor: "white",
        borderWidth: 1.5,
        maxHeight: 130
      },
      image: {
        self: {
          height: "100%",
          width: "100%",
          alignSelf: 'center',
          aspectRatio: 1
        }
      }
    },

  }
}

const styles = StyleSheet.create(homeDetailsStyleList);

export default styles;