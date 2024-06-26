import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

const CustomCard = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={100}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        With Fjord Tours you
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
};
export default CustomCard;
