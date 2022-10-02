import { FlatList, ListRenderItem, StyleSheet, ScrollView } from "react-native";

import { Text, View } from "../components/Themed";
import {
  RootTabScreenProps,
  Disciplina,
  DisciplinaHistoricoAcademico,
} from "../types";
import { CardDisciplinaHistorico } from "../components/CardDisciplinaHistorico";
import { disciplinasHistorico } from "../Mocks/disciplinaHistorico";

export default function TabHistorico({
  navigation,
}: RootTabScreenProps<"TabHistorico">) {
  const renderItem: ListRenderItem<DisciplinaHistoricoAcademico> = ({
    item,
  }) => <CardDisciplinaHistorico disciplina={item} />;

  return (
    <View style={styles.container}>
      <FlatList<DisciplinaHistoricoAcademico>
        data={disciplinasHistorico}
        keyExtractor={(item, index) => {
          return item.disciplina.codigo.toString();
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
