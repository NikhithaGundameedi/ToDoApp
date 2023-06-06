import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IPhone14ProMax1 = () => {
  return (
    <View style={styles.iphone14ProMax1}>
      <Text style={styles.taskDetails}>Task Details</Text>
      <Text style={[styles.taskTitle, styles.taskTitleFlexBox]}>
        Task Title
      </Text>
      <Text style={[styles.descriptions, styles.taskListTypo]}>
        Descriptions
      </Text>
      <Text style={styles.lastYearWas}>
        Last year was a fantastic year for NFTs, with the market reaching a $40
        billion valuation for the first time. In addition, more than $10 billion
        worth of NFTs are now sold every week – with NFT..
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.iphone14Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse.png")}
      />
      <Text style={[styles.nftWebApp, styles.taskTitleFlexBox]}>
        NFT Web App Prototype
      </Text>
      <Image
        style={[styles.iphone14ProMax1Child, styles.iphone14Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.iphone14ProMax1Item, styles.iphone14Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.iphone14ProMax1Inner, styles.iphone14Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.taskList, styles.taskListTypo]}>Task List</Text>
      <View style={styles.checkbox1Parent}>
        <View style={styles.checkbox1}>
          <View style={styles.checkbox1Child} />
        </View>
        <View style={styles.frameChild} />
        <Image
          style={[styles.component1Icon, styles.component1IconLayout]}
          resizeMode="cover"
          source={require("../assets/component-1.png")}
        />
        <Text
          style={[styles.userResearch, styles.userResearchLayout]}
        >{`User Research & Analysis`}</Text>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Text
          style={[styles.blackWhite, styles.blackWhiteTypo]}
        >{`Black & White Wireframe`}</Text>
        <View style={[styles.frameInner, styles.frameLayout]} />
        <Text style={[styles.designOnFigma, styles.addTaskTypo]}>
          Design On Figma
        </Text>
        <View style={[styles.rectangleView, styles.frameLayout]} />
        <Text style={[styles.addTask, styles.addTaskTypo]}>Add Task</Text>
        <Image
          style={[styles.component1Icon1, styles.component1IconLayout]}
          resizeMode="cover"
          source={require("../assets/component-1.png")}
        />
        <Image
          style={styles.component1Icon2}
          resizeMode="cover"
          source={require("../assets/component-11.png")}
        />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={styles.fluentMdl2calculatorAdditioIcon}
          resizeMode="cover"
          source={require("../assets/fluentmdl2calculatoraddition.png")}
        />
      </View>
      <Image
        style={[styles.fluentMdl2deleteIcon, styles.userResearchLayout]}
        resizeMode="cover"
        source={require("../assets/fluentmdl2delete.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskTitleFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  taskListTypo: {
    height: 25,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone14Layout: {
    height: 24,
    width: 19,
    top: 353,
    position: "absolute",
  },
  component1IconLayout: {
    width: 25,
    left: 27,
    height: 25,
    position: "absolute",
  },
  userResearchLayout: {
    height: 20,
    position: "absolute",
  },
  frameLayout: {
    width: 341,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_base,
    left: 2,
    position: "absolute",
  },
  blackWhiteTypo: {
    left: 78,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  addTaskTypo: {
    left: 84,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  taskDetails: {
    marginLeft: -117,
    top: 51,
    textAlign: "center",
    width: 192,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: "50%",
    position: "absolute",
  },
  taskTitle: {
    top: 93,
    width: 99,
    height: 32,
    textAlign: "left",
    display: "flex",
    color: Color.black,
    position: "absolute",
    fontSize: FontSize.size_mini,
    left: 69,
    fontFamily: FontFamily.interRegular,
  },
  descriptions: {
    top: 196,
    width: 89,
    left: 62,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_mini,
  },
  lastYearWas: {
    marginLeft: -168,
    top: 241,
    width: 335,
    height: 112,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    left: "50%",
    position: "absolute",
  },
  ellipseIcon: {
    left: 62,
  },
  nftWebApp: {
    top: 141,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    width: 276,
    height: 43,
    left: 62,
    textAlign: "left",
    display: "flex",
    color: Color.black,
    position: "absolute",
  },
  iphone14ProMax1Child: {
    left: 79,
  },
  iphone14ProMax1Item: {
    left: 95,
  },
  iphone14ProMax1Inner: {
    left: 112,
  },
  taskList: {
    top: 429,
    width: 83,
    left: 69,
    fontSize: FontSize.size_sm,
    height: 25,
  },
  checkbox1Child: {
    top: 2,
    backgroundColor: "#d9d9d9",
    width: 310,
    height: 62,
    left: 2,
    position: "absolute",
  },
  checkbox1: {
    top: 18,
    width: 312,
    height: 64,
    display: "none",
    borderRadius: Border.br_base,
    left: 2,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    top: 15,
    left: 6,
    width: 337,
    height: 69,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  component1Icon: {
    top: 37,
  },
  userResearch: {
    top: 42,
    width: 202,
    left: 78,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  frameItem: {
    top: 118,
    height: 63,
  },
  blackWhite: {
    top: 146,
    width: 212,
    height: 17,
    position: "absolute",
  },
  frameInner: {
    top: 212,
    height: 62,
  },
  designOnFigma: {
    top: 228,
    width: 170,
    height: 23,
  },
  rectangleView: {
    top: 305,
    height: 61,
  },
  addTask: {
    top: 327,
    width: 184,
    height: 22,
  },
  component1Icon1: {
    top: 136,
  },
  component1Icon2: {
    top: 227,
    width: 24,
    left: 27,
    height: 24,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.69%",
    width: "4.42%",
    top: "83.33%",
    right: "85.73%",
    bottom: "12.98%",
    left: "9.85%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  fluentMdl2calculatorAdditioIcon: {
    top: 323,
    left: 36,
    width: 15,
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  checkbox1Parent: {
    marginLeft: -184,
    top: 466,
    width: 364,
    height: 390,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  fluentMdl2deleteIcon: {
    top: 441,
    left: 354,
    width: 20,
    overflow: "hidden",
  },
  iphone14ProMax1: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 909,
    overflow: "hidden",
  },
});

export default IPhone14ProMax1;
