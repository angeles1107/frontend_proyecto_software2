import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Image } from "expo-image";

export default function AsideMainPage({ visible, setVisible }) {
  const [fontsLoaded] = useFonts({
    "League-Gothic": require("../../assets/fonts/LeagueGothic-Regular.ttf"),
    "Open-Sans": require("../../assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.background} onPress={() => setVisible(false)} />
        <View style={styles.menu}>
          <View style={styles.header}>
            <Image source={require("@/assets/images/logo_recortado.png")} style={styles.logo} />
            <Text style={styles.title}>FOODIGO</Text>
          </View>
          
          <TouchableOpacity style={styles.backButton} onPress={() => setVisible(false)}>
            <Image source={require("@/assets/images/asidemainbutton.png")} style={styles.backImage} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => setVisible(false)}>
            <Text style={styles.menuText}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => setVisible(false)}>
            <Text style={styles.menuText}>Historial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => setVisible(false)}>
            <Text style={styles.menuText}>Me gusta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => setVisible(false)}>
            <Text style={styles.menuText}>Local</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Fondo semitransparente negro
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  menu: {
    width: "45%",
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 60,  
    height: 100,
    marginRight: 10,
  },
  title: {
    fontSize: 100,
    color: "#FFF",
    fontFamily: "League-Gothic",
  },
  backButton: {
    marginBottom: 40,
  },
  backImage: {
    width: 40, 
    height: 40,
  },
  menuItem: {
    width: "100%",
    padding: 8,
    borderWidth: 2,
    borderColor: "#FFF",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  menuText: {
    color: "#FFF",
    fontSize: 12,
    fontFamily: "Open-Sans",
  },
});
