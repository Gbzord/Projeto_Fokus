//GabrielChristino Fokus
import { Pressable, StyleSheet, Text, View } from "react-native";

/**
  BotaoDeFoco Componente
  
  @param {Function} press 
  @param {string} title 
  @param {boolean} isPause 
 */

export const FokusButton = ({ press, title, isPause }) => {
  return (
    <Pressable style={styles.button} onPress={press}>
      <View style={styles.row}>
        {isPause ? (
          <View style={styles.iconPause}>
            <View style={styles.pauseBar} />
            <View style={styles.pauseBar} />
          </View>
        ) : (
          <View style={styles.iconPlay} />
        )}
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#159756ff',
    borderRadius: 32,
    paddingVertical: 8,
    paddingHorizontal: 18,
    alignItems: "center"
  },
 
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffffff',
    textAlign: "center",
    fontWeight: 'bold',
    marginLeft: 8
  },
  iconPause: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  pauseBar: {
    width: 5,
    height: 14,
    backgroundColor: '#f7f7f7ff',
    borderRadius: 1.5,
    marginHorizontal: 1
  },
  iconPlay: {
    width: 0,
    height: 0,
    borderTopWidth: 8,
    borderBottomWidth: 8,
    borderLeftWidth: 14,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#ffffffff',
    marginRight: 5,
    marginLeft: 2
  }
});