import { NextResponse, NextRequest } from "next/server";
import { Todos } from "../../../lib/TodosClass";
import { ethers } from 'ethers';

export async function POST(req: NextRequest) {
  console.log('EthGpt POST');
  const body = await req.json();
  console.log('body: ', body);
  const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/544e1243adfe4560baa0d8f2853ad919");

  const address = await provider.resolveName(body.ensName);
  return NextResponse.json(
    {
      address: address,
    },
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://chat.openai.com",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, openai-ephemeral-user-id, openai-conversation-id",
      },
    }
  );
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://chat.openai.com",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, openai-ephemeral-user-id, openai-conversation-id",
      },
    }
  );
}