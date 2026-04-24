import { Anchor, Button, Group } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { topBarLinks } from "@/data/gip-content";
import { TopHeaderMenu } from "../subComponents/Menu";

export function Header() {
  return (
    <header className="flex items-center py-2 px-5 text-white justify-between bg-primary-600 w-full sm:px-5 md:px-8 xl:px-20">
      <div className="lg:hidden">
        <TopHeaderMenu label="Veja Mais" items={topBarLinks} />
      </div>

      <div className="hidden lg:flex">
        <Group justify="center" gap="lg">
          <Link href="https://www.seplan.pi.gov.br/">
            <Button
              variant="default"
              radius="md"
              c="var(--color-neutral-default)"
            >
              Site da Seplan
            </Button>
          </Link>

          {topBarLinks.map((item) => (
            <Anchor
              key={item.label}
              href={item.href}
              underline="hover"
              c="white"
              size="md"
            >
              {item.label}
            </Anchor>
          ))}
        </Group>
      </div>

      <div className="flex items-center">
        <Image
          src="/SEPLAN.svg"
          alt="Logo da SEPLAN"
          width={160}
          height={48}
          priority
          className="h-12 w-auto"
        />
      </div>
    </header>
  );
}
