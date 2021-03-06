import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React,{useState} from 'react'
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import Menu from '../Menu/index'
import styles from "./styles";
import { faCog,faLock,faKey,faFan, faToolbox, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';

const CarItem = () => {
    const [locked, setLock ] = useState(true);

    const clickLock = () => {
        if(locked){
            setLock(false);
        }else{
            setLock(true);
        }
    }

    return (
      <View style={styles.CarContainer}>
        <ImageBackground
          source={require("../../assets/background.png")}
          style={styles.backgroundImage}
        />
        <View style={styles.header}>
          <TouchableOpacity>
            <FontAwesomeIcon style={styles.icon} icon={faCog} size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Tesla car </Text>
          <TouchableOpacity>
            <FontAwesomeIcon style={styles.icon} icon={faToolbox} size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.batterySection}>
          <Image
            source={require("../../assets/battery.png")}
            style={styles.batteryImage}
          />
          <Text style={styles.batteryText}> 150 mi</Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.statusText}>Parked</Text>
        </View>

        <ScrollView>
        <View style={styles.controls}>
          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon style={styles.icon} icon={faFan} size={24} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon style={styles.icon} icon={faKey} size={24} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={clickLock}>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon
                style={styles.icon}
                icon={locked ? faLock : faUnlockAlt}
                size={24}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Menu />
        </ScrollView>
      </View>
    );
};

export default CarItem;
