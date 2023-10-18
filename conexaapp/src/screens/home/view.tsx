import {useHomeViewModel} from './view-model';
import {FlatList, RefreshControl} from 'react-native';
import {Appointment} from '@components/appointment/view';
import {Container} from '@components/container/view';
import {Header} from '@components/header';
import {CreateButton, LogOutIcon} from './styles';
import LogoSVG from '@assets/logo-conexa-white.svg';
import AddCircleSVG from '@assets/add-circle.svg';
import {ListEmpty} from '@components/list-empty/view';

export function Home() {
  const {
    user,
    appointments,
    refresh,
    getAppointments,
    handleSignOut,
    handleCreateAppointment,
  } = useHomeViewModel();

  return (
    <Container>
      <Header.Root>
        <Header.VStack>
          <LogoSVG />
          <Header.Greetings>{user.nome}</Header.Greetings>
        </Header.VStack>
        <Header.Button
          title="Sair"
          rightElement={<LogOutIcon />}
          onPress={handleSignOut}
        />
      </Header.Root>

      <FlatList
        data={appointments}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Appointment data={item} />}
        contentContainerStyle={[
          appointments?.length === 0 && {flex: 1},
          {padding: 24, paddingBottom: 50},
        ]}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            tintColor={'white'}
            refreshing={refresh}
            onRefresh={() => {
              getAppointments(true);
            }}
          />
        }
        ListEmptyComponent={() => (
          <ListEmpty
            message={
              'Nenhum registro encontrado.\n Que tal iniciar agora agora?'
            }
          />
        )}
      />
      <CreateButton onPress={handleCreateAppointment}>
        <AddCircleSVG fill="blue" width={50} height={50} />
      </CreateButton>
    </Container>
  );
}
