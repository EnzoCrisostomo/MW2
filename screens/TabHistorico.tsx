import { FlatList, ListRenderItem, StyleSheet, ScrollView } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps, Disciplina } from "../types";
import { CardDisciplinaHistorico } from "../components/CardDisciplinaHistorico";
import { disciplinas } from "../Mocks/disciplinas";

export default function TabHistorico({
  navigation,
}: RootTabScreenProps<"TabHistorico">) {
  const renderItem: ListRenderItem<Disciplina> = ({ item }) => (
    <CardDisciplinaHistorico disciplina={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList<Disciplina>
        data={disciplinas}
        keyExtractor={(item, index) => {
          return item.codigo.toString();
        }}
        renderItem={renderItem}
        onRefresh={() => {}}
        refreshing={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
