import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData{
  id: string;
  name: string;
  date?: Date;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    
    setMySkills(oldSkills => [...oldSkills, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldSkills => oldSkills.filter(
      skill=> skill.id !== id
    ));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Lucas</Text>
      <Text style={styles.grettings}>{greeting}</Text>
      <TextInput
        style={styles.inputBody}
        placeholder={"New Skill"}
        placeholderTextColor={"#fff"}
        onChangeText={setNewSkill}
      />
      <Button buttonTitle={'add'} onPress={handleAddNewSkill} />
      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SkillCard skill={item.name} 
          onPress={() => handleRemoveSkill(item.id)}
        />}
        
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",

    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  grettings: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  inputBody: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
